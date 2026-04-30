import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "CareSync AI API"
    SUPABASE_URL: str
    SUPABASE_SERVICE_ROLE_KEY: str
    ELEVENLABS_API_KEY: str = ""
    ELEVENLABS_AGENT_ID: str = ""
    ELEVENLABS_PHONE_NUMBER_ID: str = ""
    ELEVENLABS_WEBHOOK_SECRET: str = ""
    
    # Allows loading from .env file
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()
