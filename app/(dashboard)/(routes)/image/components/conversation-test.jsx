import { render, screen, fireEvent } from "@testing-library/react";
import { ConversationForm } from "./conversation-form";

describe("ConversationForm", () => {
  test("renders form with initial values", () => {
    render(<ConversationForm onSubmit={jest.fn()} isLoading={false} />);

    const promptInput = screen.getByPlaceholderText("Enter your prompt");
    expect(promptInput).toBeInTheDocument();

    const generateButton = screen.getByText("Generate");
    expect(generateButton).toBeInTheDocument();
  });

  test("calls onSubmit function with form values when submitted", () => {
    const onSubmitMock = jest.fn();
    render(<ConversationForm onSubmit={onSubmitMock} isLoading={false} />);

    const promptInput = screen.getByPlaceholderText("Enter your prompt");
    fireEvent.change(promptInput, { target: { value: "use client" } });

    const generateButton = screen.getByText("Generate");
    fireEvent.click(generateButton);

    expect(onSubmitMock).toHaveBeenCalledWith({ prompt: "use client" });
  });
});