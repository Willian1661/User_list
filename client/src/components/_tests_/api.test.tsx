import getData from "../../lib/api";

jest.mock('../../lib/api');

describe("get data from API", () => {
    it("should process the data correctly", async () => {

        (getData as jest.Mock).mockResolvedValue("Call returned mocked data");

        const result = await getData();

        expect(getData).toHaveBeenCalledTimes(1);
        expect(result).toBe("Call returned mocked data");
    });
});