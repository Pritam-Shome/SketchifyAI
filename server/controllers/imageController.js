import { response } from 'express';
import userModel from '../models/userModel.js';
import FormData from 'form-data';
import axios from 'axios';
      

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const user = await userModel.findById(req.userId);

        if (!user || !prompt) {
            return res.status(400).json({ success: false, message: "Missing details" });
        }

        if (user.creditBalance <= 0) {
            return res.status(400).json({ success: false, message: "Insufficient credits", creditBalance: user.creditBalance });
        }

        const fromData =new FormData();
        fromData.append('prompt', prompt);

        const {data}=await axios.post('https://clipdrop-api.co/text-to-image/v1', fromData,{
             headers: {
                  'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`; 

        await userModel.findByIdAndUpdate(req.userId, { creditBalance: user.creditBalance - 1 });
        
        
        res.json({
            success: true,
            image: "Image generated successfully",
            creditBalance: user.creditBalance - 1,
            resultImage: resultImage
        });
    } catch (err) {
        console.error(err);
        res.json({ success: false, message: err.message });
    }
}