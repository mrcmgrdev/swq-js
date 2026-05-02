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

  it("sends tenant name to API and shows success message", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: 1, name: "My Company" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    render(<Tenants />);

    fireEvent.change(screen.getByLabelText("Tenant Name"), {
      target: { value: "My Company" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Senden" }));

    await waitFor(() => {
      expect(
        screen.getByText("Tenant erstellt: My Company"),
      ).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "http://localhost:8080/api/1/tenants",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ name: "My Company" }),
      }),
    );
  });
});
