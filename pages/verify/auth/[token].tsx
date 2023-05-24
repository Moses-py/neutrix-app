import mongoConnect from "@/lib/mongo_connect";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const VerifyEmailAddress = ({ email }) => {
  const [Q_A, setQ_A] = useState({
    question1: { question: "", answer: "" },
    question2: { question: "", answer: "" },
    question3: { question: "", answer: "" },
  });

  // Button Loading State
  const [buttonState, setButtonState] = useState({
    loading: false,
    text: "Submit",
    color: "black",
  });

  const router = useRouter();

  function handleSelectChange(e: SelectChangeEvent) {
    if (e.target.name === "question1") {
      setQ_A((prev) => {
        return {
          ...prev,
          question1: {
            question: e.target.value,
            answer: prev.question1.answer,
          },
        };
      });
    }
    if (e.target.name === "question2") {
      setQ_A((prev) => {
        return {
          ...prev,
          question2: {
            question: e.target.value,
            answer: prev.question2.answer,
          },
        };
      });
    }
    if (e.target.name === "question3") {
      setQ_A((prev) => {
        return {
          ...prev,
          question3: {
            question: e.target.value,
            answer: prev.question3.answer,
          },
        };
      });
    }
  }
  function handleFieldChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "answer1") {
      setQ_A((prev) => {
        return {
          ...prev,
          question1: {
            question: prev.question1.question,
            answer: e.target.value,
          },
        };
      });
    }
    if (e.target.name === "answer2") {
      setQ_A((prev) => {
        return {
          ...prev,
          question2: {
            question: prev.question2.question,
            answer: e.target.value,
          },
        };
      });
    }
    if (e.target.name === "answer3") {
      setQ_A((prev) => {
        return {
          ...prev,
          question3: {
            question: prev.question3.question,
            answer: e.target.value,
          },
        };
      });
    }
  }

  async function handleVerifyUser(e: FormEvent) {
    e.preventDefault();

    setButtonState({ loading: true, text: "Processing...", color: "black" });
    await axios({
      method: "POST",
      data: { email, securityQuestions: Q_A },
      url: "/api/mutations/securityQuestions",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response) {
          setButtonState({
            loading: true,
            text: "Successfully verified...redirecting",
            color: "green",
          });
          setQ_A({
            question1: { question: "", answer: "" },
            question2: { question: "", answer: "" },
            question3: { question: "", answer: "" },
          });

          setTimeout(() => {
            router.push("/login");
          }, 3000);
        }
      })
      .catch(() => {
        setButtonState({
          loading: false,
          text: "Error occured, try again",
          color: "red",
        });
        setQ_A({
          question1: { question: "", answer: "" },
          question2: { question: "", answer: "" },
          question3: { question: "", answer: "" },
        });

        setTimeout(() => {
          setButtonState({
            loading: false,
            text: "Submit",
            color: "black",
          });
        }, 2000);
      });
  }
  return (
    <>
      <div className="wrapper w-full h-full font-secondary p-5">
        <div className="md:container lg:w-[50%]">
          {/* Logo */}
          <div className="p-3">
            <h1 className="text-lg font-bold">Neutrix</h1>
          </div>
          <hr />
          {/* text */}
          <div className="info_text my-[2rem]">
            <h1 className="lg:text-2xl md:text-xl text-lg">
              One Last Step...!
            </h1>
            <p className="my-[2rem]">
              At <span className="text-green font-bold">Neutrix</span>, we are
              commited to keeping your information safe and secure. Please
              select your security questions and answers below. We use this to
              maintain a level of security on your personal acccount
            </p>
            <p className="my-[2rem]">
              Please ensure to keep your answers stored somewhere in memory as
              this would be required should you ever wish to recover your
              account.
            </p>
          </div>
          <form onSubmit={handleVerifyUser}>
            {/* Question 1 */}
            <div className="my-3 flex gap-3 items-center text-black flex-col md:flex-row">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Security Question 1
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Security question 1"
                  onChange={handleSelectChange}
                  name="question1"
                  value={Q_A.question1.question}
                >
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="Favorite movie character?"
                  >
                    Favorite movie charater?
                  </MenuItem>
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="Who was your childhood hero?"
                  >
                    Who was your childhood hero?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                fullWidth
                id="security-answer"
                variant="outlined"
                placeholder="Your answer"
                className="mb-3 md:mb-0"
                onChange={handleFieldChange}
                value={Q_A.question1.answer}
                name="answer1"
              />
            </div>
            {/* Question 2*/}
            <div className="my-3 flex gap-3 items-center text-black flex-col md:flex-row">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Security Question 2
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Q_A.question2.question}
                  label="Security question 1"
                  onChange={handleSelectChange}
                  name="question2"
                >
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="Favorite catchphrase?"
                  >
                    Favorite catchphrase?
                  </MenuItem>
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="Favorite song?"
                  >
                    Favorite Song?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                fullWidth
                id="security-answer"
                variant="outlined"
                placeholder="Your answer"
                className="mb-3 md:mb-0"
                onChange={handleFieldChange}
                value={Q_A.question2.answer}
                name="answer2"
              />
            </div>
            {/* Question 3 */}
            <div className="my-3 flex gap-3 items-center text-black flex-col md:flex-row">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  Security Question 3
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Q_A.question3.question}
                  label="Security question 1"
                  onChange={handleSelectChange}
                  name="question3"
                >
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="What is your dream car?"
                  >
                    What is your dream car?
                  </MenuItem>
                  <MenuItem
                    sx={{ wordBreak: "break-word" }}
                    value="Favorite toy as a kid?"
                  >
                    Favorite toy as a kid?
                  </MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                fullWidth
                id="security-answer"
                variant="outlined"
                placeholder="Your answer"
                className="mb-3 md:mb-0"
                onChange={handleFieldChange}
                value={Q_A.question3.answer}
                name="answer3"
              />
            </div>
            <button
              disabled={buttonState.loading}
              type="submit"
              className={`text-white bg-${
                buttonState.color
              } hover:bg-gray-900 rounded-lg text-xs px-5 py-2.5 my-2 ${
                buttonState.loading && "cursor-not-allowed"
              }`}
            >
              {buttonState.text}
            </button>
          </form>

          <div className="contact my-[3rem] md:w-[50%] leading-32">
            <p className="">
              Feel free to contact us should you have any issues on{" "}
              <a className="text-green">info@brandname.com</a>. We are always
              happy to help.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerifyEmailAddress;

export async function getServerSideProps(context: { params: { token: any } }) {
  const id = context.params.token;

  const { db, client } = await mongoConnect();
  if (!db) throw new Error("Error encountered");
  const user = await db.collection("users").findOne({ email_token: id });

  if (!user || user.isVerified) {
    return {
      notFound: true,
    };
  }

  client.close();
  return {
    props: {
      email: user.email,
    },
  };
}