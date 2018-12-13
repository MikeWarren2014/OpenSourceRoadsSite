import { EmailMessage } from "./email-message";

describe("EmailMessage", () => { 
    it("has a static helper function that performs validation of emails", () => { 
        it("should pass a sanity test", () => { 
            const validEmail = "mike.warren@opensourceroads.com"
            expect(EmailMessage.isValidEmail(validEmail)).toBeTruthy()
        })
    })
})