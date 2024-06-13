import { FC } from "react";
interface ButtonProps {
  variant: ButtonVariant;
}

export enum ButtonVariant {
  DONATE = "donate",
}
const Button: FC<ButtonProps> = ({ variant }) => {
  switch (variant) {
    case ButtonVariant.DONATE:
      return (
        <div
          className="ml-6 inline-flex items-center rounded-md bg-gradient-to-r from-blue-400 to-green-300  
                          px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="84RWKBQJQR7KY"
            />
            <button
              type="submit"
              // src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            >
              Donate
            </button>
            <img
              alt=""
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      );
  }
};

export default Button;
