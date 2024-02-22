// validation.js
export const validateNextStep = async (
    currentStep,
    refno,
    execute,
    setBillingInfo,
    goToNextStep,
    openAlert
) => {
    if (currentStep === 1) {
        if (!refno) {
            openAlert("Enter TAX Number");
            return false;
        }

        try {
            const showdetails = true;
            const response = await execute({ refno, showdetails });

            if (!response || !response.info) {
                openAlert("TAX number does not exist");
                return false;
            } else {
                setBillingInfo(response.info);
                goToNextStep();
                return true;
            }
        } catch (error) {
            openAlert("An error occurred while fetching data. Please try again.");
            return false;
        }
    }
    return false;
};
