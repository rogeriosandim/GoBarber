import * as FakeMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider"
// @ponicode
describe("parse", () => {
    let inst: any

    beforeEach(() => {
        inst = new FakeMailTemplateProvider.default()
    })

    test("0", async () => {
        await inst.parse()
    })
})
