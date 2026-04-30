from fastapi import APIRouter
from app.api.endpoints import doctors, appointments, consultations, webhooks

api_router = APIRouter()

api_router.include_router(doctors.router, prefix="/doctors", tags=["doctors"])
api_router.include_router(appointments.router, prefix="/appointments", tags=["appointments"])
api_router.include_router(consultations.router, prefix="/consultations", tags=["consultations"])
api_router.include_router(webhooks.router, prefix="/webhooks", tags=["webhooks"])
