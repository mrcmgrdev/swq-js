import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Tenants from "../app/routes/tenants";

describe("Tenants Page", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders a form with tenant name input and submit button", () => {
    render(<Tenants />);

    expect(screen.getByLabelText("Tenant Name")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Senden" })).toBeInTheDocument();
  });
});
