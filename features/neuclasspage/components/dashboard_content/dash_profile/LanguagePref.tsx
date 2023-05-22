import languages from "./languageCode";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Input } from "@mui/material";
import React from "react";

const LanguagePref = () => {
  const [language, setLanguage] = React.useState("English");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  return (
    <>
      <div className="p-0 my-5">
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          className="w-full outline-none"
        >
          <InputLabel id="language-select">Language</InputLabel>
          <Select
            labelId="language-select"
            id="language-select"
            value={language}
            label="Language"
            onChange={handleChange}
          >
            {languages.map((language) => {
              return (
                <MenuItem key={language.code} value={language.name}>
                  {language.name}
                </MenuItem>
              );
            })}
          </Select>
          {/* <Input /> */}
        </FormControl>
      </div>
    </>
  );
};
export default LanguagePref;
