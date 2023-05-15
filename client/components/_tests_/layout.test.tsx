import renderer from "react-test-renderer";
import Layout from "../layout";

describe("layout component", () => {

    const MockHeader = jest.fn();

    jest.mock("../header", () => {
        MockHeader();
        return <MockHeader />;
    });

    const MockFooter = jest.fn();

    jest.mock("../footer", () => {
        MockFooter();
        return <MockFooter />;
    });

    it('should call Header component', () => {
        renderer.create(<Layout>{<MockHeader />}</Layout>);
        expect(MockHeader).toHaveBeenCalled();
    });

    it('should call Footer component', () => {
        renderer.create(<Layout>{<MockFooter />}</Layout>);
        expect(MockFooter).toHaveBeenCalled();
    });
});