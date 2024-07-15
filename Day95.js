//* You are given a list of meetings, where each meeting is represented by a start time and an end time. Your task is to write a function mergeMeetings that takes an array of meeting time intervals and merges any overlapping meetings into a single time interval.
function mergeMeetings(meetings) {
    if (meetings.length === 0) return [];
  
    // Step 1: Sort the meetings by their start times
    meetings.sort((a, b) => a[0] - b[0]);
  
    // Step 2: Initialize the merged meetings array with the first meeting
    const mergedMeetings = [meetings[0]];
  
    // Step 3: Iterate through the sorted meetings
    for (let i = 1; i < meetings.length; i++) {
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
      const currentMeeting = meetings[i];
  
      // Check if the current meeting overlaps with the last merged meeting
      if (currentMeeting[0] <= lastMergedMeeting[1]) {
        // Merge the current meeting with the last merged meeting
        lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);
      } else {
        // No overlap, add the current meeting to the merged meetings array
        mergedMeetings.push(currentMeeting);
      }
    }
  
    // Step 4: Return the merged meetings array
    return mergedMeetings;
  }
  
  // Example usage:
  const meetings = [
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8]
  ];
  
  const result = mergeMeetings(meetings);
  console.log(result); // Output: [[1, 4
  
  