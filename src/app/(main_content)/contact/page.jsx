
import ContactForm from "@/components/ContactForm";
import FootNav from "@/components/FootNav";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata = {
  title: 'Contact | zerogtiger'
}

export const preview = "You can always reach me by e..."
// export const preview = "This is Tiger Z. Ding's website ..."

export default function Contact() {
  return (
    <main>
      <div className='-border mx-auto px-4 max-w-[52rem]'>
        <h1> Contact </h1>
        <p> You can always reach me by email via <Link href="mailto:zerogtiger@gmail.com">zerogtiger@gmail.com</Link>.</p>
        <p>You will definitely receive a reply from me, most likely within the next 48 hours. Tell me a bit about yourself and your background if you'd like, and maybe how you found this site. I'm always curious! </p>


        <p>Feel free to shoot me any question anonymously via my <Link
          href={"https://qbox.zerotiger.ca/en/tiger/ask"} >Box of のuestions inbox</Link>.</p>
        <p>Alternatively, send me a quick message below:</p>
        <ContactForm />
      </div>
    </main>
  )
}
