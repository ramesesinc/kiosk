import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import Dropdown from "@/components/ui/Dropdown";
import Grid from "@/components/ui/Grid";
import Modal from "@/components/ui/Modal";
import Title from "@/components/ui/Title";
import { createFetch } from "@/libs/fetch";
import { getBilling } from "@/services/api/rptbilling";
import { useTaxBillingContext } from "@/services/context/rpt-context";
import { useEffect, useState } from "react";

const RptInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { value, execute } = createFetch(getBilling);
  let options = [1, 2, 3, 4];
  let yearOptions = [2024, 2025, 2026, 2027];
  const {
    taxBillingInfo,
    setTaxBillingInfo,
    selectedOption,
    selectedOptionYear,
    setSelectedOptionYear,
    setSelectedOption,
  } = useTaxBillingContext();
  useEffect(() => {
    if (value && value.info) {
      setTaxBillingInfo(value.info);
    }
  }, [selectedOption, selectedOptionYear, taxBillingInfo, value]);

  const handlePayOptionChange = (billtoqtr: number | string) => {
    setSelectedOption(billtoqtr);
    setIsModalOpen(false);
    try {
      execute({
        refno: taxBillingInfo?.tdno,
        showdetails: true,
        billtoyear: taxBillingInfo?.billtoyear,
        billtoqtr: billtoqtr,
      });
    } catch (error) {
      console.error("Error fetching billing data:", error);
    }
  };
  const handlePayYearChange = (billtoyear: number | string) => {
    setSelectedOptionYear(billtoyear);
    try {
      execute({
        refno: taxBillingInfo?.tdno,
        showdetails: true,
        billtoqtr: taxBillingInfo?.billtoqtr,
        billtoyear: billtoyear,
      });
    } catch (error) {
      console.error("Error fetching billing data:", error);
    }
  };

  const renderTaxBillingInfo = () => (
    <div className="flex justify-start items-start w-full">
      <Grid columns="grid-rows-8 gap-5 font-bold indent-12 basis-[50%]">
        {[
          "Bill No.",
          "Bill Date",
          "TD No.",
          "PIN",
          "Property Owner",
          "Address",
          "Billing Period",
          "Ammount Due",
        ].map((label, index) => (
          <p key={index} className="text-start !text-[22px]">
            {label}
          </p>
        ))}
      </Grid>
      {taxBillingInfo && (
        <Grid columns="grid-rows-8 gap-5 font-semibold w-full">
          {[
            taxBillingInfo.billno,
            taxBillingInfo.billdate,
            taxBillingInfo.tdno,
            taxBillingInfo.fullpin,
            taxBillingInfo.owner?.name,
            taxBillingInfo.taxpayer?.address,
            taxBillingInfo.billperiod,
            taxBillingInfo.amount,
          ].map((value, index) => (
            <p key={index} className="text-start !text-[22px]">{`${value}`}</p>
          ))}
        </Grid>
      )}
    </div>
  );

  return (
    <div className="text-2xl flex flex-col gap-12 w-full">
      <Title text={"Billing Information"} classname="text-green-500" />
      <div className="flex flex-col gap-10 ">
        <div className="flex ">{renderTaxBillingInfo()}</div>
        {taxBillingInfo && (
          <>
            <div>
              <Button
                buttonText={"Pay Option"}
                classname="p-5"
                onClick={openModal}
              />
            </div>
          </>
        )}
      </div>
      {taxBillingInfo && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          textButton={"confirm"}
          buttonLayout="hidden"
        >
          <Title text={"Pay Options"} classname="text-[22px] " />
          <Dropdown
            caption="Year to Bill"
            options={yearOptions}
            onChange={handlePayYearChange}
          />
          <Dropdown
            options={options}
            caption="Quater to Bill"
            onChange={handlePayOptionChange}
          />
        </Modal>
      )}
    </div>
  );
};

export default RptInfo;
