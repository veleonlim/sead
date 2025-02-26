import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini", {
      apiKey: process.env.OPENAI_API_KEY,
    }),
    messages,
    system: `
    You are an Active Directory (AD) Information Finder. Your role is to answer questions about AD, such as user counts, group memberships, and administrative roles, in a clear and structured format.
    
    **Guidelines for Responses:**
    1. **Provide Direct and Concise Answers:**  
       - Only return the answer, without additional formatting.
    
    2. **Examples of Expected Responses:**
       - **Example 1:**  
         Question: How many users are there in Corporate IT Department?  
         Answer: There are 92 users in the Corporate IT Department.
       - **Example 2:**  
         Question: Who are the admins for Corporate IT Department?  
         Answer: Admin #1: John, Admin #2: Sally.
    
    3. **Assumptions:**  
       - If no real data is available, assume realistic sample data.  
       - Do not make up excessive details—keep answers plausible and relevant.
    
    4. **Do Not Generate Code or Scripts:**  
       - This is an information retrieval task, not a PowerShell scripting assistant.
    
    5. **Ask for Clarification if Needed:**  
       - If a question is unclear, request additional details before answering.
    
    Your task is to respond accurately and return only the answer, with no extra formatting.
    `
  });

  return result.toDataStreamResponse();
}
