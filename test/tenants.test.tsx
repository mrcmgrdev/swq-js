import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("sends tenant name to API and shows success message", async () => {
    const user = userEvent.setup();
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 1, name: "My Company" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    render(<Tenants />);

    await user.type(screen.getByLabelText("Tenant Name"), "My Company");
    await user.click(screen.getByRole("button", { name: "Senden" }));

    await waitFor(() => {
      expect(screen.getByText("Tenant erstellt: My Company")).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:8080/api/v1/tenants",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ name: "My Company" }),
      }),
    );
  });

  it("clears input after successful submission", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: "Test" }),
      }),
    );

    render(<Tenants />);

    const input = screen.getByLabelText("Tenant Name") as HTMLInputElement;
    await user.type(input, "Test");
    await user.click(screen.getByRole("button", { name: "Senden" }));

    await waitFor(() => {
      expect(screen.getByText("Tenant erstellt: Test")).toBeInTheDocument();
    });
    expect(input.value).toBe("");
  });
});
