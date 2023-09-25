import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function GeneratePage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className=" inline-block inlinemax-w-lg text-center justify-center">
				<h1 className={title({ size: "lg", color: "violet", fullWidth: true })}>
					Generate
				</h1>
				<br />
				<h2 className={subtitle()}>Choose either to &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Template&nbsp;</h2>
				<h2 className={subtitle()}> or &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Prompt&nbsp;</h2>
			</div>
			<div className="inline-block mt-14 items-center justify-center">
				<Link href="/template">
					<Button
						color="primary"
						variant="bordered"
						size="lg"
						className="mr-10"
					>
						Template
					</Button>
				</Link>
				<Link href="/prompt">
					<Button color="primary" variant="bordered" size="lg">
						Prompt
					</Button>
				</Link>
			</div>
		</section>
	);
}
