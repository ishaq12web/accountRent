import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./home";

describe("Home Component", () => {
    it("renders the Home component and its elements", () => {
        render(<Home />);
        
        // Check if the search bar is rendered
        expect(screen.getByPlaceholderText(/Search items.../i)).toBeInTheDocument();

        // Check if slideshow text is rendered
        expect(screen.getByText(/Rent a One-time account/i)).toBeInTheDocument();

        // Check if the items are rendered
        expect(screen.getByText(/Netflix/i)).toBeInTheDocument();
        expect(screen.getByText(/Hulu/i)).toBeInTheDocument();
        expect(screen.getByText(/Disney+/i)).toBeInTheDocument();
    });

    it("filters items based on search query", () => {
        render(<Home />);

        const searchBar = screen.getByPlaceholderText(/Search items.../i);

        // Search for "Netflix"
        fireEvent.change(searchBar, { target: { value: "Netflix" } });
        expect(screen.getByText(/Netflix/i)).toBeInTheDocument();
        expect(screen.queryByText(/Hulu/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Disney+/i)).not.toBeInTheDocument();

        // Search for "Hulu"
        fireEvent.change(searchBar, { target: { value: "Hulu" } });
        expect(screen.getByText(/Hulu/i)).toBeInTheDocument();
        expect(screen.queryByText(/Netflix/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Disney+/i)).not.toBeInTheDocument();

        // Clear search query
        fireEvent.change(searchBar, { target: { value: "" } });
        expect(screen.getByText(/Netflix/i)).toBeInTheDocument();
        expect(screen.getByText(/Hulu/i)).toBeInTheDocument();
        expect(screen.getByText(/Disney+/i)).toBeInTheDocument();
    });

    it("changes slides when dots are clicked", () => {
        render(<Home />);

        // Initially, the first slide is active
        expect(screen.getByText(/Rent a One-time account/i)).toBeVisible();
        expect(screen.queryByText(/Lease a One-time account and earn/i)).not.toBeVisible();

        // Click on the second dot
        const dots = screen.getAllByRole("button");
        fireEvent.click(dots[1]);

        //check role
        expect(getByTestId('dot')).toBeValid()

        // Now the second slide should be active
        expect(screen.queryByText(/Rent a One-time account/i)).not.toBeVisible();
        expect(screen.getByText(/Lease a One-time account and earn/i)).toBeVisible();
    });

    it("shows no results message when search query has no matches", () => {
        render(<Home />);

        const searchBar = screen.getByPlaceholderText(/Search items.../i);

        // Search for a non-matching term
        fireEvent.change(searchBar, { target: { value: "Nonexistent" } });
        expect(screen.getByText(/No items match your search query./i)).toBeInTheDocument();

        // Ensure no items are displayed
        expect(screen.queryByText(/Netflix/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Hulu/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Disney+/i)).not.toBeInTheDocument();
    });
});
