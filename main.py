from fastapi import FastAPI
from api.chat_routes import router as chat_router

app = FastAPI(title="Conversational AI Backend")

app.include_router(chat_router)
