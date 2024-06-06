import React, { useState } from "react";
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import {
  Visibility,
  VisibilityOff,
  Delete,
  AddCircle,
} from "@mui/icons-material";
import { Toaster, toast } from "sonner";

function Signup() {
  const [submittedData, setSubmittedData] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (updateIndex !== null) {
      setSubmittedData((prevData) => {
        const newData = [...prevData];
        newData[updateIndex] = data;
        return newData;
      });
      toast.success("Data Updated Successfully");
      setUpdateIndex(null);
    } else {
      setSubmittedData((prevData) => [...prevData, data]);
      toast.success("Form Submitted Successfully");
    }
    reset();
  };

  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setVisibility2(!visibility2);
  };

  const password = watch("password");

  const handleDelete = (index) => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    const rowData = submittedData[index];
    reset(rowData);
  };

  return (
    <div className="bg-slate-300">
      <div className="flex items-center justify-center min-h-screen ">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "90%",
            maxWidth: "600px",
            p: 2,
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: "8px",
            "@media (max-width: 600px)": {
              width: "100%",
              padding: "1rem",
            },
          }}
        >
          <h2 className="text-4xl text-center font-extrabold italic">SignUp</h2>

          {/* //name--------------------------------- */}
          <div className="flex flex-col gap-8 md:flex-row">
            <FormControl sx={{ width: "100%" }}>
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                inputProps={{ maxLength: 16 }}
                {...register("firstName", {
                  required: true,
                  pattern: /[A-Za-z]/,
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? "First Name is required" : ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000",
                    },
                    "&:hover fieldset": {
                      borderColor: "#000",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#000",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                id="lastname"
                label="Last Name"
                variant="outlined"
                inputProps={{ maxLength: 16 }}
                {...register("lastName", { required: true })}
                error={!!errors.lastName}
                helperText={errors.lastName ? "Last Name is required" : ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#000",
                    },
                    "&:hover fieldset": {
                      borderColor: "#000",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#000",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000",
                  },
                }}
              />
            </FormControl>
          </div>

          {/* email----------------------------------------------- */}
          <FormControl>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              type="email"
              {...register("email", {
                required: "Please enter a valid email",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Please enter a valid email",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
          </FormControl>

          {/* date and gender--------------------------------- */}
          <div className="flex flex-col gap-8 md:flex-row">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={null}
                rules={{ required: "Please pick a date" }}
                render={({ field }) => (
                  <div className="flex flex-col w-full">
                    <DatePicker
                      label="Date of Birth"
                      {...field}
                      slotProps={{ textField: { variant: "outlined" } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#000" },
                          "&:hover fieldset": { borderColor: "#000" },
                          "&.Mui-focused fieldset": { borderColor: "#000" },
                        },
                        "& .MuiInputLabel-root": { color: "#000" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
                      }}
                    />
                    {errors.dateOfBirth && (
                      <span className="text-red-500">
                        {errors.dateOfBirth.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </LocalizationProvider>

            <FormControl
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            >
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="demo-simple-select"
                {...register("gender")}
                error={!!errors.gender}
                label="Gender"
                defaultValue="Male"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="TransGender">TransGender</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* password----------------------------------- */}
          <FormControl>
            <TextField
              label="Password"
              type={visibility ? "text" : "password"}
              InputLabelProps={{ shrink: Boolean(watch("password")) }}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {visibility ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </FormControl>

          {/* confirm password--------------------------------------- */}
          <FormControl required>
            <TextField
              label="Confirm Password"
              type={visibility2 ? "text" : "password"}
              InputLabelProps={{ shrink: Boolean(watch("confirmPassword")) }}
              autoComplete="new-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {visibility2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
          </FormControl>

          {/* submit button */}
          <button type="submit" className="bg-black rounded-lg py-4 text-white">
            {updateIndex !== null ? "Update" : "Submit"}
          </button>
        </Box>
      </div>

      {/* Submitted Data Table */}
      {submittedData.length > 0 && (
        <Box
          sx={{
            mt: 4,
            p: 2,
            ml: 10,
            bgcolor: "white",
            boxShadow: 3,
            borderRadius: "8px",
            width: "90%",
            "@media (max-width: 600px)": {
              width: "100%",
              padding: "1rem",
            },
          }}
        >
          <h2 className="text-2xl text-center font-bold">Submitted Data</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* Table Headers */}
                  {Object.keys(submittedData[0]).map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                  <TableCell>Actions</TableCell> {/* Actions Header */}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Table Rows */}
                {submittedData.map((row, index) => (
                  <TableRow key={index}>
                    {/* Table Cells */}
                    {Object.values(row).map((value, idx) => (
                      <TableCell key={idx}>{String(value)}</TableCell>
                    ))}
                    <TableCell>
                      {/* Action Buttons */}
                      {/* Update button */}
                      <IconButton onClick={() => handleUpdate(index)}>
                        <AddCircle />
                      </IconButton>
                      {/* Delete button */}
                      <IconButton onClick={() => handleDelete(index)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Toast Notifications */}
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
          classNames: {
            closeButton: "#000",
          },
        }}
        closeButton
      />
    </div>
  );
}

export default Signup;
