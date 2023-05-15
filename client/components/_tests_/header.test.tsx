import Header from '../header';
import { render } from '@testing-library/react';

describe("header test", () => {
  render(<Header />);
  const link = Array.from(document.querySelectorAll('#link'));
  const linksContent = link.map(link => link.innerHTML);

  it("is rendering header's tag", () => {
    const header = document.querySelector("#header");
    expect(header.getAttribute('id')).toBe('header');
  });

  it.each(link)("is checking header's links path exists", (link) => {

    expect(link.getAttribute('href')).toBeTruthy();

  });

  it("is rendering header's links content", () => {
    link.forEach((link, i) => {
      expect(link.innerHTML).toBe(linksContent[i]);
    });
  });
});