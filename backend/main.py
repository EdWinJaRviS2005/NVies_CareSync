"""
MedTrigger — FastAPI application entry point.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.endpoints import router

app = FastAPI(
    title="MedTrigger API",
    description="Drag & Drop Medical Workflow Automation Backend",
    version="0.1.0",
)

cors_origins = [origin.strip() for origin in settings.cors_origins.split(",") if origin.strip()]
cors_origin_regex = settings.cors_origin_regex or None

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_origin_regex=cors_origin_regex,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
app.include_router(router, prefix="/api")


@app.get("/")
async def root():
    return {
        "message": "Welcome to CareSync AI API",
        "docs": "/docs",
        "health": "/health"
    }


@app.get("/health")
async def health():
    return {"status": "ok"}