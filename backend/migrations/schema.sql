-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create doctors table
CREATE TABLE IF NOT EXISTS public.doctors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    bio TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    doctor_id UUID REFERENCES public.doctors(id) ON DELETE CASCADE,
    patient_name VARCHAR(255) NOT NULL,
    patient_email VARCHAR(255) NOT NULL,
    appointment_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) DEFAULT 'scheduled',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Enable Row Level Security (RLS) policies if using Supabase Auth
-- ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Insert some seed data
INSERT INTO public.doctors (name, specialty, bio) VALUES
('Dr. Alice Smith', 'Cardiology', 'Expert in heart-related conditions with 10+ years of experience.'),
('Dr. Bob Jones', 'Dermatology', 'Specialist in skin conditions and cosmetic procedures.');
