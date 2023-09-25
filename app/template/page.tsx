"use client";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
} from "@nextui-org/dropdown";
import { Input } from "@nextui-org/input";
export default function TemplatePage() {
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Type"]));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
		[selectedKeys]
	);
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-0">
			<h1 className={title()}>Enter the following details</h1>
			<Input
				variant="bordered"
				size="lg"
				label="First Name"
				placeholder="Enter your first name"
			/>
			<Input
				variant="bordered"
				size="lg"
				label="Last Name"
				placeholder="Enter your last name"
			/>
			<Input
				variant="bordered"
				size="lg"
				label="Tenure"
				placeholder="Enter your tenure"
			/>
			<Input
				variant="bordered"
				size="lg"
				label="Oauths"
				placeholder="Enter your oauths"
			/>
			<Input
				variant="bordered"
				size="lg"
				label="Services Providing"
				placeholder="Enter your services providing"
			/>
			<Input
				variant="bordered"
				size="lg"
				label="Date"
				placeholder="Enter date"
			/>
			<Dropdown style={{ width: 500 }}>
				<DropdownTrigger>
					<Button size="lg" variant="bordered" className="capitalize">
						{selectedValue}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					variant="flat"
					closeOnSelect={false}
					disallowEmptySelection
					selectionMode="single"
					selectedKeys={selectedKeys}
					onSelectionChange={setSelectedKeys}
				>
					<DropdownItem key="text">Text</DropdownItem>
					<DropdownItem key="number">Number</DropdownItem>
					<DropdownItem key="date">Date</DropdownItem>
					<DropdownItem key="single_date">Single Date</DropdownItem>
					<DropdownItem key="iteration">Iteration</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Button
				style={{ width: 500 }}
				color="primary"
				variant="shadow"
				size="lg"
				className="mt-2"
			>
				Submit
			</Button>
		</section>
	);
}
