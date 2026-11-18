const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/91818/.gemini/antigravity/brain/dac84c9a-66f7-4501-a1dc-e2aec6cc5d96/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('public/images/specialties/') || line.includes('public\\images\\specialties\\')) {
    try {
      const obj = JSON.parse(line);
      console.log('Step ' + obj.step_index + ':', (JSON.stringify(obj.tool_calls || obj.content) || '').slice(0, 200));
    } catch(e){}
  }
});

