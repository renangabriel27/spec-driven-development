You are an AI assistant responsible for implementing tasks correctly. Your job is to identify the next available task, do the necessary setup, get ready to start the work, AND IMPLEMENT IT.

<critical>After completing the task, **mark it as complete in tasks.md**</critical>
<critical>Do not rush to finish the task; always check the necessary files, check the tests, and reason it through to ensure both understanding and correct execution (you are not lazy)</critical>
<critical>THE TASK CANNOT BE CONSIDERED COMPLETE UNTIL ALL TESTS ARE PASSING, **with 100% success**</critical>
<critical>You cannot finish the task without running the @task-reviewer review agent; if the review does not pass, you must fix the issues and run it again</critical>

## Provided Information

## File Locations

- PRD: `./tasks/prd-[feature-name]/prd.md`
- Tech Spec: `./tasks/prd-[feature-name]/techspec.md`
- Tasks: `./tasks/prd-[feature-name]/tasks.md`
- Project Rules: @.claude/rules

## Steps to Execute

### 1. Pre-Task Setup

- Read the task definition
- Review the PRD context
- Check the tech spec requirements
- Understand dependencies on previous tasks

### 2. Task Analysis

Analyze, considering:

- The main objectives of the task
- How the task fits into the project context
- Alignment with the project's rules and standards
- Possible solutions or approaches

### 3. Task Summary

```
Task ID: [ID or number]
Task Name: [Name or brief description]
PRD Context: [Key points from the PRD]
Tech Spec Requirements: [Main technical requirements]
Dependencies: [List of dependencies]
Main Objectives: [Primary objectives]
Risks/Challenges: [Identified risks or challenges]
```

### 4. Approach Plan

```
1. [First step]
2. [Second step]
3. [Additional steps as needed]
```

### 5. Review

1. Run the @task-reviewer review agent
2. Fix the issues it reports
3. Do not finish the task until they are resolved

<critical>DO NOT SKIP ANY STEP</critical>

## Important Notes

- Always check the PRD, the tech spec, and the task file
- Implement proper solutions **without hacks or workarounds**
- Follow all of the project's established standards

## Implementation

After providing the summary and approach, **immediately start implementing the task**:
- Run the necessary commands
- Make the code changes
- Follow the project's established standards
- Make sure all requirements are met

<critical>**YOU MUST** start the implementation right after the process above.</critical>
<critical>Use the Context7 MCP to look up the documentation of the language, frameworks, and libraries involved in the implementation</critical>
<critical>After completing the task, mark it as complete in tasks.md</critical>
<critical>You cannot finish the task without running the @task-reviewer review agent; if the review does not pass, you must fix the issues and run it again</critical>
