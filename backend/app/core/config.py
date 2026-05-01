from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # Supabase
    supabase_url: str = ""
    supabase_service_role_key: str = ""

    # Twilio (optional — only needed for Call Patient action)
    twilio_account_sid: str = ""
    twilio_auth_token: str = ""
    twilio_phone_number: str = ""

    # ElevenLabs Conversational AI
    elevenlabs_api_key: str = ""
    elevenlabs_agent_id: str = ""
    elevenlabs_phone_number_id: str = ""
    elevenlabs_webhook_secret: str = ""  # wsec_... from ElevenLabs dashboard

    # Machine-to-Machine app (for Management API — fetching Google tokens)
    # (Removed Auth0 config, handling via Supabase)

    # App
    app_base_url: str = "http://localhost:8000"
    cors_origins: str = (
        "http://localhost:3000,"
        "http://localhost:3001,"
        "http://127.0.0.1:3000,"
        "http://127.0.0.1:3001,"
        "https://care-sync-ai-delta.vercel.app"
    )
    cors_origin_regex: str = r"https://.*\.vercel\.app"


settings = Settings()