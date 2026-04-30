from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime

class DoctorBase(BaseModel):
    name: str
    specialty: str
    bio: Optional[str] = None
    is_available: bool = True

class DoctorCreate(DoctorBase):
    pass

class Doctor(DoctorBase):
    id: str
    created_at: datetime
    
    model_config = ConfigDict(from_attributes=True)

class AppointmentBase(BaseModel):
    doctor_id: str
    patient_name: str
    patient_email: str
    appointment_time: datetime

class AppointmentCreate(AppointmentBase):
    pass

class Appointment(AppointmentBase):
    id: str
    status: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
