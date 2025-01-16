import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";

describe("Header Component", () => {
    it("renders the Header component and displays navigation links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        // Check if navigation links are rendered with correct labels
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Market Place/i)).toBeInTheDocument();
        expect(screen.getByText(/About Us/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });

    it("ensures navigation links have correct paths", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        // Check if each Link points to the correct path
        expect(screen.getByText(/Home/i).closest("a")).toHaveAttribute("href", "/");
        expect(screen.getByText(/Market Place/i).closest("a")).toHaveAttribute(
            "href",
            "/market"
        );
        expect(screen.getByText(/About Us/i).closest("a")).toHaveAttribute(
            "href",
            "/about"
        );
        expect(screen.getByText(/Contact Us/i).closest("a")).toHaveAttribute(
            "href",
            "/contact"
        );
        expect(screen.getByText(/Login/i).closest("a")).toHaveAttribute(
            "href",
            "/login"
        );
    });
});
