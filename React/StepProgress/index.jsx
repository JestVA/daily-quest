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

const Wrapper = ({children}) => (
	<Box
		display="flex"
		flexDirection={["column", "row"]}
		alignItems={["left", "center"]}
		justifyContent="space-between"
		pb={{_: "", sm: "16", lg: "8"}}
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
		>
			{state.map((step, i) =>
			{
				const isLastStep = i === state.length - 1;

				return (
					<>
						<Box key={i} display="flex" pl={i === 0 ? ["", "10"] : ["", ""]} pr={isLastStep ? ["", "10"] : ["", ""]}>
							<Box
								color={config[step.state]?.labelColor}
								fontWeight="500"
								display="flex"
								flexDirection={["row", "column"]}
								alignItems="center"
								position="relative"
							>
								<StepIcon icon={step.state === STEP_STATES.COMPLETED ? <TiTick size="1.314em" /> : (i + 1)} bg={config[step.state]?.stepIcon} />
								{step.label ?
									<Box
										display={["flex", "block"]}
										position={["relative", "absolute"]}
										top={["", "50px"]}
										pl={["2", ""]}
										textAlign={["left", "center"]}
										maxWidth={{_:"250px", sm: "160px", lg: "300px"}}
										minWidth={{_:"160px", sm: "160px", lg: "260px"}}
									>
										{step.label}
									</Box>
									: null}
							</Box>
						</Box>
						{!isLastStep ? <Box
							flex={1}
							minWidth={{_:"4px", sm: "30px", lg: "30px"}}
							maxWidth={{_: "4px", sm: "100%", lg: "100%"}}
							minHeight={{_:"20px", sm: "4px", lg: "4px" }}
							rounded="full"
							bg={config[step.state]?.connectorColour}
							mx={{_: "16px", sm: "5px", lg: "5px"}}
						/> : null}
					</>
				);
			})
			}
		</Wrapper>
	);
};