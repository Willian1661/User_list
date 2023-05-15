import Footer from "../footer";
import { render } from '@testing-library/react';

describe("footer test", () => {
    render(<Footer />);
    const link = Array.from(document.querySelectorAll('#link'));
    const linksContent = link.map(link => link.innerHTML);

    it("is rendering footer's tag", () => {
        const footer = document.querySelector("#footer");
        expect(footer.getAttribute('id')).toBe('footer');
    });

    it.each(link)("is checking footer's links path exists", (link) => {

        expect(link.getAttribute('href')).toBeTruthy();

    });

    it("is rendering footer's links content", () => {
        link.forEach((link, i) => {
            expect(link.innerHTML).toBe(linksContent[i]);
        });
    });
});