import { title } from "@/components/primitives";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
export default function PromptPage() {
	return (
		<div>
			<h1 className={title()}>Prompt</h1>

			<Textarea
				key="flat"
				variant="flat"
				placeholder="Enter your prompt"
				style={{ width: 500 }}
			/>

			<Button color="primary" variant="bordered" size="lg" className="mt-5">
				Submit
			</Button>
			<Card className="max-w-[500px] mt-10">
				<CardHeader className="flex gap-3 items-center justify-center">
					<p className="text-md">Content</p>
				</CardHeader>
				<Divider />
				<CardBody>
					<p>hehe meowhehe meowmeowmeow</p>
				</CardBody>
			</Card>
		</div>
	);
}
