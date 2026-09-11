import {
  ButtonGroup,
  CardActions,
  CardOverflow,
  Chip,
  IconButton,
  SvgIcon,
} from "@mui/joy";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";

const cardSx = {
  backgroundColor: "var(--bg-raised)",
  color: "var(--fg)",
  border: "1px solid var(--border)",
};

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "var(--fg)",
    "& fieldset": { borderColor: "var(--border)" },
    "&:hover fieldset": { borderColor: "var(--fg-muted)" },
    "&.Mui-focused fieldset": { borderColor: "var(--accent)" },
  },
  "& .MuiInputLabel-root": {
    color: "var(--fg-muted)",
    fontFamily: "var(--font-mono)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent)",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 md:p-2">
      <p className="font-mono text-sm text-(--accent) text-center">
        {"// contact"}
      </p>
      <div className="flex max-md:flex-col items-center justify-center text-center gap-4">
        <Image
          src="/images/contact/contact.gif"
          height={200}
          width={200}
          alt="Contact animation"
          unoptimized
        />
        <Typography
          level="h4"
          sx={{ color: "var(--fg)", fontFamily: "var(--font-mono)" }}
          className="text-lg font-semibold"
        >
          {"Let's get in touch for some exciting endeavours together."}
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-center">
        <div className="flex justify-center items-center flex-1 w-full max-w-sm">
          <Card sx={{ width: "100%", boxShadow: "lg", ...cardSx }}>
            <CardContent className="flex flex-col lg:flex-row items-center gap-4">
              <Image
                src="/images/contact/agam-mishra.png"
                alt="Agam Mishra"
                width={200}
                height={200}
                className="rounded-full"
              />
              <Typography
                level="h1"
                sx={{ color: "var(--fg)", fontFamily: "var(--font-mono)" }}
                className="text-center lg:text-left"
              >
                Agam Mishra
              </Typography>
            </CardContent>
            <CardContent className="socials flex flex-col gap-2 pt-4">
              <Typography level="body-md" sx={{ color: "var(--fg-muted)" }}>
                <a
                  href="mailto:agammishra05@gmail.com"
                  className="flex items-center text-inherit no-underline"
                >
                  <Mail className="mr-2" /> agammishra05@gmail.com
                </a>
              </Typography>
              <Typography level="body-md" sx={{ color: "var(--fg-muted)" }}>
                <GitHub />{" "}
                <Link
                  href="https://github.com/agam-mishra/"
                  style={{ color: "var(--accent)" }}
                >
                  agam-mishra
                </Link>
              </Typography>
              <Typography level="body-md" sx={{ color: "var(--fg-muted)" }}>
                <LinkedIn />{" "}
                <Link
                  href="https://www.linkedin.com/in/agammishra"
                  style={{ color: "var(--accent)" }}
                >
                  Agam Mishra
                </Link>
              </Typography>
              <Typography level="body-md" sx={{ color: "var(--fg-muted)" }}>
                <Instagram />{" "}
                <Link
                  href="https://www.instagram.com/agam_mishra"
                  style={{ color: "var(--accent)" }}
                >
                  @agam_mishra
                </Link>
              </Typography>
              <Typography level="body-md" sx={{ color: "var(--fg-muted)" }}>
                <Twitter />{" "}
                <Link
                  href="https://x.com/agammishra10"
                  style={{ color: "var(--accent)" }}
                >
                  @agammishra10
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center items-center flex-1 w-full max-w-lg">
          <Card className="w-full" sx={cardSx}>
            <div className="p-4">
              <form className="space-y-6">
                <TextField
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  sx={textFieldSx}
                />
                <TextField
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={textFieldSx}
                />
                <TextField
                  id="message"
                  label="Your Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  fullWidth
                  required
                  sx={textFieldSx}
                />
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="contained"
                    className="w-fit mx-auto"
                    sx={{
                      backgroundColor: "var(--accent)",
                      color: "var(--bg)",
                      fontFamily: "var(--font-mono)",
                      "&:hover": {
                        backgroundColor: "var(--accent)",
                        opacity: 0.85,
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
