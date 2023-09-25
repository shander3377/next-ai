import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
export default function Home() {
	return (
	
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className=" inline-block inlinemax-w-lg text-center justify-center">
				<h1 className={title({ size: "lg", color: "violet", fullWidth: true })}>
					AI Models Simplified
				</h1>
				<br />
				<h2 className={subtitle()}>Choose either to &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Simplify&nbsp;</h2>
				<h2 className={subtitle()}> or &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Generate&nbsp;</h2>
				
				{/* <span>Choose either to </span>
				<span style={{ color: "violet" }}>Generate </span>
				or
				<span style={{ color: "violet" }}> Simplify</span> */}
			</div>
			<div className="inline-block mt-14 items-center justify-center"	>
				<Link href="/simplify">
					<Button
						color="primary"
						variant="bordered"
						size="lg"
						className="mr-10"
					>
						Simplify
					</Button>
				</Link>
				<Link href="/generate">
					<Button
						color="primary"
						variant="bordered"
						size="lg"
						className="mr-10"
					>
						Generate
					</Button>
				</Link>
			</div>
		</section>
	);
}
