import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());
app.use(express.static("."));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/race-engineer", async (req,res)=>{
  try{
    const {vehicle, telemetry} = req.body;
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      input: [
        {role:"system",content:"Você é um engenheiro de corrida virtual. Responda em português brasileiro, de forma curta e prática."},
        {role:"user",content:`Veículo: ${JSON.stringify(vehicle)}\nTelemetria: ${JSON.stringify(telemetry)}\nDê uma recomendação de pilotagem/tuning.`}
      ]
    });
    res.json({text:response.output_text});
  }catch(err){
    console.error(err);
    res.status(500).json({error:"Falha no serviço de IA"});
  }
});

app.listen(process.env.PORT || 3000,()=>console.log("Capivari Horizon server online"));
