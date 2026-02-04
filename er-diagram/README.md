# ER Diagram – Relationship Summary

users – patients  
1 : 1  
Each user has one patient profile.

patients – appointments  
1 : many  
A patient can book multiple appointments.

doctors – appointments  
1 : many  
A doctor can attend multiple appointments.

doctors – availability_slots  
1 : many  
A doctor can have multiple availability slots.

availability_slots – appointments  
1 : 1  
Each appointment uses one availability slot.

appointment_statuses – appointments  
1 : many  
Each appointment has one status.

appointments – payments  
1 : 0..1  
An appointment can have at most one payment.

appointments – chat_messages  
1 : many  
An appointment can have multiple chat messages.

appointments – reminders  
1 : many  
An appointment can generate multiple reminders.

appointments – feedbacks  
1 : 0..1  
An appointment can have one feedback entry.

appointments – reengagements  
1 : 0..1  
An appointment can have one re-engagement entry.

doctors – services  
many : many  
Handled using doctor_services mapping table.
