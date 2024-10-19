import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 id="about">o/</h1>
      <p>
        Hello, I'm <b>Fahim!</b> I enjoy messing around with technology and building solutions to problems through CS.
      </p>
      <p>
        I'm a current first-year at {" "}
        <a href="https://nyu.edu" target="_blank">
          <b>NYU</b>
        </a>{" "}
        studying computer science. You can see my previous experiences and education in detail on my {" "}
      <Link target="_blank" href="/resume.pdf">
        <b>resume</b>
      </Link>{"."}
      </p>
      <p>
        If you'd like to get in touch or have any inquires you can reach out to me at{" "}
        <a href="mailto:fahimhussain21@gmail.com">
          <b>fahimhussain21@gmail.com</b>{"."}
        </a>
      </p>
    </div>
  );
}
