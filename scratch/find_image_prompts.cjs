const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('C:/Users/91818/.gemini/antigravity/brain/dac84c9a-66f7-4501-a1dc-e2aec6cc5d96/.system_generated/logs/transcript_full.jsonl');

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('image-generator')) {
    try {
      const obj = JSON.parse(line);
      console.log('Step:', obj.step_index);
      if (obj.tool_calls) {
        console.log(JSON.stringify(obj.tool_calls, null, 2));
      }
    } catch(e){}
  }
});
