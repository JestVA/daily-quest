import { Box } from "@components/atoms";
import { useEffect, useReducer } from "react";
import { TiTick } from "react-icons/ti";

const STEP_STATES = {
	NOT_STARTED: "not_started",
	CURRENT: "current",
	COMPLETED: "completed"
};

const stepsReducer = (steps, {payload}) => steps.map((step, i) =>
{
	if(payload.index > i)
		step.state = STEP_STATES.COMPLETED;
	else if(payload.index < i)
		step.state = STEP_STATES.NOT_STARTED;
	else if(payload.index === i)
		step.state = STEP_STATES.CURRENT;

	return step;
});

const Wrapper = ({children, renderMobile}) => (
	<Box
		display="flex"
		flexDirection={renderMobile ? "column" : ["column", "row"]}
		alignItems={renderMobile ? "left" : ["left", "center"]}
		justifyContent="space-between"
		pb={renderMobile ? "" : {_: "", sm: "16", lg: "8"}}
	>{children}</Box>
);

const StepIcon = (props) =>
	(
		<Box
			width="36px"
			height="36px"
			position="relative"
			rounded="full"
			color="white"
			display="flex"
			justifyContent="center"
			alignItems="center"
			fontSize="lg"
			{...props}
		>
			{props.icon}
		</Box>
	);

export const StepProgress = ({
	renderMobile = false,
	steps = [],
	currentStep = 0,
	config = {
		not_started: {labelColor: "gray.200", stepIcon: "gray.200", connectorColour: "gray.200"},
		current: {labelColor: "black", stepIcon: "brand.primary.500", connectorColour: "gray.200"},
		completed: {labelColor: "black", stepIcon: "brand.primary.500", connectorColour: "brand.primary.500"}
	}
}) =>
{
	const [state, dispatch] = useReducer(stepsReducer, steps);

	useEffect(() =>
	{
		dispatch({
			type: "init",
			payload: { index: currentStep,  state: STEP_STATES.CURRENT }
		});
	}, [currentStep]);

	return (
		<Wrapper
			renderMobile={renderMobile}
		>
			{state.map((step, i) =>
			{
				const isLastStep = i === state.length - 1;

				return (
					<>
						<Box key={i} display="flex" pl={(i === 0 && !renderMobile) ? ["", "10"] : ["", ""]} pr={(isLastStep && !renderMobile) ? ["", "10"] : ["", ""]}>
							<Box
								color={config[step.state]?.labelColor}
								fontWeight="500"
								display="flex"
								flexDirection={["column", "column"]}
								alignItems="center"
								position="relative"
							>
								<StepIcon icon={step.state === STEP_STATES.COMPLETED ? <TiTick size="1.314em" /> : (i + 1)} bg={config[step.state]?.stepIcon} />
								{(!isLastStep && renderMobile) ? <Box
									flex={1}
									minWidth={"4px"}
									maxWidth={"4px"}
									minHeight={"20px"}
									rounded="full"
									bg={config[step.state]?.connectorColour}
									mx={"16px"}
								/> : null}
								{(!isLastStep && !renderMobile) ? <Box
									display={["block", "none"]}
									flex={1}
									minWidth={"4px"}
									maxWidth={"4px"}
									minHeight={"20px"}
									rounded="full"
									bg={config[step.state]?.connectorColour}
									mx={"16px"}
								/> : null}
								{step.label && !renderMobile ?
									<Box
										display={["none", "block"]}
										position={"absolute"}
										top={"50px"}
										pl={""}
										textAlign={"center"}
										maxWidth={{_:"250px", sm: "150px", lg: "300px"}}
										minWidth={{_:"160px", sm: "150px", lg: "260px"}}
									>
										{step.label}
									</Box>
									: null}
							</Box>
							<Box>
								{step.label ?
									<Box
										display={renderMobile ? "flex" : ["flex", "none"]}
										position={renderMobile ? "relative" : ["relative", "absolute"]}
										pt={renderMobile ? "2" : ["2", ""]}
										top={renderMobile ? "" : ["", "50px"]}
										pl={renderMobile ? "4" : ["4", ""]}
										textAlign={renderMobile ? "left" : ["left", "center"]}
										maxWidth={ renderMobile ? "250px" : {_:"250px", sm: "160px", lg: "300px"}}
										minWidth={renderMobile ? "160px" : {_:"160px", sm: "160px", lg: "260px"}}
										fontWeight={500}
									>
										{step.label}
									</Box>
									:
									null
								}
								{step.subheading ?
									<Box
										py="2"
										pl="4"
										display={renderMobile ? "block" : ["block", "none"]}
									>
										{step.subheading}
									</Box>
									:
									null
								}
							</Box>
						</Box>
						{/* Below is the connector style for tablets/desktop, when the layout is horizontal */}
						{(!isLastStep && !renderMobile) ? <Box
							display={["none", "block"]}
							flex={1}
							minWidth={{_:"", sm: "30px", lg: "30px"}}
							maxWidth={{_: "", sm: "100%", lg: "100%"}}
							minHeight={{_:"", sm: "4px", lg: "4px" }}
							rounded="full"
							bg={config[step.state]?.connectorColour}
							mx={{_: "", sm: "5px", lg: "5px"}}
						/> : null}
					</>
				);
			})
			}
		</Wrapper>
	);
};