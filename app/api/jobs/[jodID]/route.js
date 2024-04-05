import { NextResponse } from "next/server"

 
export async function GET(req,context) {
	
	try {
		const {params} = context
    const team = params?.jodID

    return (NextResponse.json({
		
		"Job_Req_ID": team,
		"Additional_Locations": "Athens",
		"Additional_Locations_ID": [
			{
				"value": "2352"
			}
		],
		"Position_ID": "",
		"Comp_Currency": "EUR",
		"Comp_Currency_ID": "EUR",
		"Comp_Frequency": "Annual",
		"Comp_Frequency_ID": "Annual",
		"Comp_Maximum": "105000",
		"Comp_Midpoint": "91250",
		"Comp_Minimum": "77500",
		"Company": "Global Modern Services, Inc. (USA)",
		"Company_ID": "GMS_USA_company",
		"Confidential_Job": "0",
		"Cost_Center": "10000 Office of CEO",
		"Cost_Center_ID": [
			{
				"value": "10000"
			}
		],
		"Country": "Netherlands",
		"Create_Job_Requisition_Reason": "Administrative > Non-competitive fill; no recruiting required",
		"Description": "",
		"Employee_Type": "Casual",
		"Employee_Type_ID": "Casual",
		"Hiring_Manager": "Harry Bright",
		"Hiring_Manager_Employee_ID": [
			{
				"value": "21549"
			}
		],
		"Job_Family": "FA-Employee Services",
		"Job_Family_ID": "FA-Employee_Services",
		"Job_Family_Group": "Administration",
		"Job_Family_Group_ID": "Administration",
		"Job_Posting_Title": "iCIMS-Test-Engineer-JobReq",
		"Job_Profile": "Supervisor, Employee Services",
		"Job_Profile_ID": "38451",
		"Job_Requisition_Status": "Open",
		"Job_Requisition_Status_ID": "Approved",
		"Justification": "",
		"Last_Functionally_Updated": "2024-02-05T09:38:58.150000-08:00",
		"Management_Level": "7 Supervisor",
		"Management_Level_ID": "7_Supervisor",
		"Most_Recent_Change_Date": "2024-02-05",
		"New_Position": "Replacement",
		"Openings_Available": "5",
		"Openings_Total": "5",
		"Primary_Location": "Amsterdam",
		"Primary_Location_ID": "2472",
		"Primary_Recruiter": "Logan McNeil",
		"Primary_Recruiter_Employee_ID": "21001",
		"Requisition_Reason": "Administrative > Non-competitive fill; no recruiting required",
		"Requisition_Reason_ID": "Create_Job_Requisition_Administrative_Non-competitive_fill_no_recruiting_required",
		"Supervisory_Organization": "iCims Job Management",
		"Supervisory_Organization_ID": "icims_Job_Management",
		"Time_Type": "Full time",
		"Time_Type_ID": "Full_time",
		"Total_Base_Pay": "0",
		"Worker_Sub_Type": "Casual",
		"Worker_Sub_Type_ID": "Casual",
		"Worker_Type": "Employee",
		"Worker_Type_ID": "EE",
		"referenceID": "Create_Job_Requisition_Administrative_Non-competitive_fill_no_recruiting_required",
		"Compensation_Plan_ID": [
			{
				"value": "[\"\"]"
			}
		],
		"Position_Category": "FA-Employee_Services - FA-Employee Services",
		"Position_Type": "Casual Full-Time",
		"Employee_Contract_Type_ID": "EMPLOYEE_CONTRACT_TYPE-4-1 - 1 Year",
		"Spotlight_Job": "",
		"Employee_Contract_Type": "1 Year",
		"Linked_Evergreen_Requisition": "",
		"Is_Evergreen": "No",
		"lastRecordExternalId": "JR100528",
		"lookupEntryId": "9845086881",
		"lastModifiedDateTime": "2024-02-05T01:38:58.150000-08:00",
		"CustomField": {
			"DummyCustomField": "JR10052843",
			"DummyArray": [
				{
					"DummyArrayField2": "21549",
					"DummyArrayField1": "0"
				}
			]
		}
	}, { status: 200 }))
	} catch (error) {
		return (NextResponse.json(
			{error:error.message}, { status: 500 }))
	}
	
  }
   