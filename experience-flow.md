# Doctor & Patient Experience – Appointment Booking System

## Patient Experience Flow

1. Patient discovers the application.
2. Patient opens the app.
3. Patient chooses a sign-up or sign-in method:
   - Email / phone
   - Google OAuth
4. Patient verifies identity using OTP or email verification.
5. Patient selects role as Patient during onboarding.
6. System creates a user profile for the patient.
7. Patient completes onboarding walkthrough.
8. Patient searches for doctors.
9. Patient checks doctor availability.
10. Patient books an appointment.
11. Patient receives booking confirmation.
12. Patient can cancel or reschedule an appointment.
13. Patient can return to the app later to manage future appointments.

---

## Doctor Experience Flow

1. Doctor discovers the application.
2. Doctor opens the app.
3. Doctor registers using professional credentials or Google OAuth.
4. Doctor selects role as Doctor during onboarding.
5. System creates a user account.
6. Doctor submits verification details.
7. System generates a verification token and waits for verification/approval.
8. After verification, a doctor profile is created.
9. Doctor sets up profile information:
   - specialization
   - experience
   - consultation hours
10. Doctor sets availability slots.
11. Doctor starts receiving appointment requests.
12. Doctor can update availability.
13. Doctor can manage upcoming appointments.
14. Doctor can re-login later and continue managing schedule.

---

## Mapping to backend

- Authentication and role handling are managed through the Auth module.
- User onboarding is stored in the User entity.
- Doctor onboarding is handled using Doctor, Profile, Specialization and VerificationToken entities.

