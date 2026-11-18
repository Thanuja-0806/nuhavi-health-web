/**
 * src/data/explainerScripts.ts
 * Nuhavi Health — 10 Explainer Video Scripts (60-120s Patient Education Format)
 * Extracted directly from Nuhavi-Knowledge-Centre-All-Articles.pdf (Pages 224-230).
 *
 * Designed for 2D animation studios with subtitles and warm, clear clinical narrative.
 */

export interface ExplainerScriptScene {
  time: string;
  visual: string;
  narration: string;
  timestamp: string;
  visualDirection: string;
  audioVoiceover: string;
  onScreenGraphics: string;
}

export interface ExplainerScript {
  id: string;
  title: string;
  specialtySlug: string;
  specialtyTitle: string;
  duration: string;
  targetDurationSeconds: number;
  wordCount: string;
  style: string;
  coreMessage: string;
  targetAudience: string;
  scenes: ExplainerScriptScene[];
}

export const explainerScriptsList: ExplainerScript[] = [
  {
    "id": "script-01",
    "title": "How Heart Bypass Surgery (CABG) Works",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "duration": "90 seconds",
    "targetDurationSeconds": 90,
    "wordCount": "173 narration words",
    "style": "2D animation, warm medical palette, on-screen captions; no surgical footage",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Heart Bypass Surgery (CABG) Works.",
    "targetAudience": "Patients and families exploring Cardiology treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:10",
        "visual": "A beating heart; camera zooms to the coronary arteries on its surface",
        "narration": "Your heart is a muscle, and like every muscle it needs a steady supply of blood. That blood flows through small vessels called coronary arteries.",
        "timestamp": "0:00-0:10",
        "visualDirection": "A beating heart; camera zooms to the coronary arteries on its surface",
        "audioVoiceover": "Your heart is a muscle, and like every muscle it needs a steady supply of blood. That blood flows through small vessels called coronary arteries.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      },
      {
        "time": "0:10-0:25",
        "visual": "Plaque slowly builds inside an artery; blood flow thins to a trickle",
        "narration": "Over time, fatty plaque can build up inside these arteries, narrowing them. Less blood reaches the heart, which can cause chest pain, breathlessness or a heart attack.",
        "timestamp": "0:10-0:25",
        "visualDirection": "Plaque slowly builds inside an artery; blood flow thins to a trickle",
        "audioVoiceover": "Over time, fatty plaque can build up inside these arteries, narrowing them. Less blood reaches the heart, which can cause chest pain, breathlessness or a heart attack.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      },
      {
        "time": "0:25-0:40",
        "visual": "Animated road map with a traffic jam and a new bypass road",
        "narration": "When several arteries are badly blocked, doctors may recommend bypass surgery. Just like a road bypass lets traffic avoid a jam, a surgical bypass lets blood flow around a blockage.",
        "timestamp": "0:25-0:40",
        "visualDirection": "Animated road map with a traffic jam and a new bypass road",
        "audioVoiceover": "When several arteries are badly blocked, doctors may recommend bypass surgery. Just like a road bypass lets traffic avoid a jam, a surgical bypass lets blood flow around a blockage.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      },
      {
        "time": "0:40-0:55",
        "visual": "Highlight graft sources: chest wall artery, leg vein, forearm artery",
        "narration": "The surgeon uses a healthy blood vessel called a graft, usually taken from inside the chest wall, the leg or the forearm.",
        "timestamp": "0:40-0:55",
        "visualDirection": "Highlight graft sources: chest wall artery, leg vein, forearm artery",
        "audioVoiceover": "The surgeon uses a healthy blood vessel called a graft, usually taken from inside the chest wall, the leg or the forearm.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      },
      {
        "time": "0:55-1:10",
        "visual": "Graft attached above and below the blockage; blood flows freely",
        "narration": "One end of the graft is attached above the blockage and the other end below it. Blood now has a new path to reach the heart muscle.",
        "timestamp": "0:55-1:10",
        "visualDirection": "Graft attached above and below the blockage; blood flows freely",
        "audioVoiceover": "One end of the graft is attached above the blockage and the other end below it. Blood now has a new path to reach the heart muscle.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      },
      {
        "time": "1:10-1:30",
        "visual": "Patient walking, attending cardiac rehab, taking medicines",
        "narration": "Most patients spend a few days in hospital and recover over two to three months. Medicines, cardiac rehabilitation and healthy habits help keep the new grafts open for years. Talk to your heart specialist about whether bypass surgery is right for you.",
        "timestamp": "1:10-1:30",
        "visualDirection": "Patient walking, attending cardiac rehab, taking medicines",
        "audioVoiceover": "Most patients spend a few days in hospital and recover over two to three months. Medicines, cardiac rehabilitation and healthy habits help keep the new grafts open for years. Talk to your heart specialist about whether bypass surgery is right for you.",
        "onScreenGraphics": "Nuhavi Health · How Heart Bypass Surgery (CABG) Works"
      }
    ]
  },
  {
    "id": "script-02",
    "title": "How Angioplasty and Stenting Are Performed",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "duration": "75 seconds",
    "targetDurationSeconds": 75,
    "wordCount": "120 narration words",
    "style": "2D animation with simple cutaway views; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Angioplasty and Stenting Are Performed.",
    "targetAudience": "Patients and families exploring Cardiology treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:10",
        "visual": "A narrowed coronary artery with reduced blood flow",
        "narration": "When a coronary artery becomes narrowed or blocked, the heart muscle does not get enough blood.",
        "timestamp": "0:00-0:10",
        "visualDirection": "A narrowed coronary artery with reduced blood flow",
        "audioVoiceover": "When a coronary artery becomes narrowed or blocked, the heart muscle does not get enough blood.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      },
      {
        "time": "0:10-0:25",
        "visual": "A thin tube travels from the wrist up the arm to the heart",
        "narration": "Angioplasty opens the artery without open surgery. A thin tube, called a catheter, is guided from the wrist or groin up to the heart.",
        "timestamp": "0:10-0:25",
        "visualDirection": "A thin tube travels from the wrist up the arm to the heart",
        "audioVoiceover": "Angioplasty opens the artery without open surgery. A thin tube, called a catheter, is guided from the wrist or groin up to the heart.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      },
      {
        "time": "0:25-0:35",
        "visual": "Dye highlights the blockage on an X- ray screen",
        "narration": "A special dye is injected so the doctor can see exactly where the blockage is.",
        "timestamp": "0:25-0:35",
        "visualDirection": "Dye highlights the blockage on an X- ray screen",
        "audioVoiceover": "A special dye is injected so the doctor can see exactly where the blockage is.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      },
      {
        "time": "0:35-0:50",
        "visual": "Guide wire crosses blockage; balloon inflates and pushes plaque aside",
        "narration": "A fine wire crosses the blockage. A tiny balloon is then inflated to press the plaque against the artery wall.",
        "timestamp": "0:35-0:50",
        "visualDirection": "Guide wire crosses blockage; balloon inflates and pushes plaque aside",
        "audioVoiceover": "A fine wire crosses the blockage. A tiny balloon is then inflated to press the plaque against the artery wall.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      },
      {
        "time": "0:50-1:05",
        "visual": "Mesh stent expands and stays in place; balloon removed",
        "narration": "A small mesh tube called a stent is expanded and left in place to keep the artery open. Most stents release medicine slowly to help prevent re- narrowing.",
        "timestamp": "0:50-1:05",
        "visualDirection": "Mesh stent expands and stays in place; balloon removed",
        "audioVoiceover": "A small mesh tube called a stent is expanded and left in place to keep the artery open. Most stents release medicine slowly to help prevent re- narrowing.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      },
      {
        "time": "1:05-1:15",
        "visual": "Patient going home with medicines",
        "narration": "Most patients go home within a day or two. Taking your blood-thinning medicines exactly as prescribed is essential.",
        "timestamp": "1:05-1:15",
        "visualDirection": "Patient going home with medicines",
        "audioVoiceover": "Most patients go home within a day or two. Taking your blood-thinning medicines exactly as prescribed is essential.",
        "onScreenGraphics": "Nuhavi Health · How Angioplasty and Stenting Are Performed"
      }
    ]
  },
  {
    "id": "script-03",
    "title": "How CAR-T Cell Therapy Works",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "duration": "120 seconds",
    "targetDurationSeconds": 120,
    "wordCount": "174 narration words",
    "style": "2D animation; friendly cell characters; include on-screen note \"Approved only for certain blood cancers\"",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How CAR-T Cell Therapy Works.",
    "targetAudience": "Patients and families exploring Oncology treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Immune T-cells patrolling the bloodstream, passing by cancer cells that look disguised",
        "narration": "Your immune system has soldier cells called T-cells. They protect you from infections, but some cancer cells manage to hide from them.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Immune T-cells patrolling the bloodstream, passing by cancer cells that look disguised",
        "audioVoiceover": "Your immune system has soldier cells called T-cells. They protect you from infections, but some cancer cells manage to hide from them.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "0:15-0:30",
        "visual": "Blood flowing from patient's arm into an apheresis machine and back",
        "narration": "CAR-T therapy begins by collecting some of the patient's own T-cells. Blood is passed through a machine that separates the T-cells and returns the rest.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Blood flowing from patient's arm into an apheresis machine and back",
        "audioVoiceover": "CAR-T therapy begins by collecting some of the patient's own T-cells. Blood is passed through a machine that separates the T-cells and returns the rest.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "0:30-0:50",
        "visual": "Laboratory: T-cells receive a new receptor that fits a marker on cancer cells",
        "narration": "In a specialised laboratory, the T-cells are given a new receptor, called a CAR. It works like a key that fits a specific marker on certain cancer cells, such as CD19 on B-cell lymphoma and leukaemia.",
        "timestamp": "0:30-0:50",
        "visualDirection": "Laboratory: T-cells receive a new receptor that fits a marker on cancer cells",
        "audioVoiceover": "In a specialised laboratory, the T-cells are given a new receptor, called a CAR. It works like a key that fits a specific marker on certain cancer cells, such as CD19 on B-cell lymphoma and leukaemia.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "0:50-1:05",
        "visual": "Cells multiplying into millions over weeks",
        "narration": "The modified cells are multiplied into millions. This takes a few weeks.",
        "timestamp": "0:50-1:05",
        "visualDirection": "Cells multiplying into millions over weeks",
        "audioVoiceover": "The modified cells are multiplied into millions. This takes a few weeks.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "1:05-1:20",
        "visual": "Patient receives short chemotherapy, then a drip infusion",
        "narration": "The patient receives a short course of chemotherapy to make room for the new cells. Then the CAR-T cells are given back through a drip.",
        "timestamp": "1:05-1:20",
        "visualDirection": "Patient receives short chemotherapy, then a drip infusion",
        "audioVoiceover": "The patient receives a short course of chemotherapy to make room for the new cells. Then the CAR-T cells are given back through a drip.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "1:20-1:40",
        "visual": "CAR-T cells locking onto and destroying cancer cells, then multiplying",
        "narration": "Inside the body, the CAR-T cells find the cancer cells, attack them and multiply.",
        "timestamp": "1:20-1:40",
        "visualDirection": "CAR-T cells locking onto and destroying cancer cells, then multiplying",
        "audioVoiceover": "Inside the body, the CAR-T cells find the cancer cells, attack them and multiply.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      },
      {
        "time": "1:40-2:00",
        "visual": "Patient monitored by nurses; on- screen text about approved uses",
        "narration": "Patients are monitored closely for several weeks for side effects such as fever and confusion. CAR-T is approved only for certain blood cancers, usually after other treatments have not worked. Ask a haematologist whether it may be suitable for you.",
        "timestamp": "1:40-2:00",
        "visualDirection": "Patient monitored by nurses; on- screen text about approved uses",
        "audioVoiceover": "Patients are monitored closely for several weeks for side effects such as fever and confusion. CAR-T is approved only for certain blood cancers, usually after other treatments have not worked. Ask a haematologist whether it may be suitable for you.",
        "onScreenGraphics": "Nuhavi Health · How CAR-T Cell Therapy Works"
      }
    ]
  },
  {
    "id": "script-04",
    "title": "How Chemotherapy and Radiation Therapy Work",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "duration": "110 seconds",
    "targetDurationSeconds": 110,
    "wordCount": "144 narration words",
    "style": "Split-screen 2D animation; calm narration; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Chemotherapy and Radiation Therapy Work.",
    "targetAudience": "Patients and families exploring Oncology treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:12",
        "visual": "Normal cells dividing in order; cancer cells dividing rapidly",
        "narration": "Cancer cells grow and divide faster than most normal cells. Chemotherapy and radiation therapy both take advantage of this.",
        "timestamp": "0:00-0:12",
        "visualDirection": "Normal cells dividing in order; cancer cells dividing rapidly",
        "audioVoiceover": "Cancer cells grow and divide faster than most normal cells. Chemotherapy and radiation therapy both take advantage of this.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      },
      {
        "time": "0:12-0:30",
        "visual": "Chemotherapy drip; medicine particles travel through the bloodstream",
        "narration": "Chemotherapy uses medicines that travel through the bloodstream to reach cancer cells almost anywhere in the body. It is usually given in cycles, with rest periods for the body to recover.",
        "timestamp": "0:12-0:30",
        "visualDirection": "Chemotherapy drip; medicine particles travel through the bloodstream",
        "audioVoiceover": "Chemotherapy uses medicines that travel through the bloodstream to reach cancer cells almost anywhere in the body. It is usually given in cycles, with rest periods for the body to recover.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      },
      {
        "time": "0:30-0:45",
        "visual": "Medicine also affecting hair follicles and mouth lining; icons for side effects",
        "narration": "Because some healthy cells also divide quickly, chemo can cause side effects like tiredness, nausea or hair loss. Most are temporary and can be managed.",
        "timestamp": "0:30-0:45",
        "visualDirection": "Medicine also affecting hair follicles and mouth lining; icons for side effects",
        "audioVoiceover": "Because some healthy cells also divide quickly, chemo can cause side effects like tiredness, nausea or hair loss. Most are temporary and can be managed.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      },
      {
        "time": "0:45-1:05",
        "visual": "Radiation machine; beams shaped around a tumour avoiding nearby organs",
        "narration": "Radiation therapy uses precisely targeted high-energy rays to damage the DNA of cancer cells in a specific area. Modern machines shape the beams to protect healthy organs.",
        "timestamp": "0:45-1:05",
        "visualDirection": "Radiation machine; beams shaped around a tumour avoiding nearby organs",
        "audioVoiceover": "Radiation therapy uses precisely targeted high-energy rays to damage the DNA of cancer cells in a specific area. Modern machines shape the beams to protect healthy organs.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      },
      {
        "time": "1:05-1:25",
        "visual": "Patient lying still for a few minutes; calendar of daily sessions",
        "narration": "Treatment is painless and usually takes a few minutes a day over several weeks. Side effects mainly affect the treated area.",
        "timestamp": "1:05-1:25",
        "visualDirection": "Patient lying still for a few minutes; calendar of daily sessions",
        "audioVoiceover": "Treatment is painless and usually takes a few minutes a day over several weeks. Side effects mainly affect the treated area.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      },
      {
        "time": "1:25-1:50",
        "visual": "Team of doctors planning together",
        "narration": "Your cancer team may use chemotherapy, radiation, surgery or a combination. They will plan the treatment best suited to your cancer.",
        "timestamp": "1:25-1:50",
        "visualDirection": "Team of doctors planning together",
        "audioVoiceover": "Your cancer team may use chemotherapy, radiation, surgery or a combination. They will plan the treatment best suited to your cancer.",
        "onScreenGraphics": "Nuhavi Health · How Chemotherapy and Radiation Therapy Work"
      }
    ]
  },
  {
    "id": "script-05",
    "title": "How Deep Brain Stimulation Works",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "duration": "90 seconds",
    "targetDurationSeconds": 90,
    "wordCount": "123 narration words",
    "style": "2D animation with translucent head and brain; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Deep Brain Stimulation Works.",
    "targetAudience": "Patients and families exploring Neurology treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Hand with tremor; brain signals shown as erratic flashes",
        "narration": "In conditions like Parkinson's disease and essential tremor, abnormal signals in deep parts of the brain cause shaking, stiffness and slow movement.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Hand with tremor; brain signals shown as erratic flashes",
        "audioVoiceover": "In conditions like Parkinson's disease and essential tremor, abnormal signals in deep parts of the brain cause shaking, stiffness and slow movement.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      },
      {
        "time": "0:15-0:30",
        "visual": "Medicines working well, then fluctuating over the day",
        "narration": "Medicines often help for many years. But for some people, symptoms become hard to control.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Medicines working well, then fluctuating over the day",
        "audioVoiceover": "Medicines often help for many years. But for some people, symptoms become hard to control.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      },
      {
        "time": "0:30-0:50",
        "visual": "Electrode placed into a precise deep brain target; wire runs under the skin to a chest device",
        "narration": "Deep Brain Stimulation places very thin electrodes in a precise target deep in the brain. They connect to a small battery device under the skin of the chest, similar to a heart pacemaker.",
        "timestamp": "0:30-0:50",
        "visualDirection": "Electrode placed into a precise deep brain target; wire runs under the skin to a chest device",
        "audioVoiceover": "Deep Brain Stimulation places very thin electrodes in a precise target deep in the brain. They connect to a small battery device under the skin of the chest, similar to a heart pacemaker.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      },
      {
        "time": "0:50-1:05",
        "visual": "Erratic signals calm into a smooth rhythm; tremor reduces",
        "narration": "The device sends mild electrical pulses that calm the abnormal signals, which can reduce tremor and stiffness.",
        "timestamp": "0:50-1:05",
        "visualDirection": "Erratic signals calm into a smooth rhythm; tremor reduces",
        "audioVoiceover": "The device sends mild electrical pulses that calm the abnormal signals, which can reduce tremor and stiffness.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      },
      {
        "time": "1:05-1:20",
        "visual": "Doctor adjusting settings with a tablet",
        "narration": "Doctors adjust the settings over several visits to get the best result. Stimulation can be changed or switched off.",
        "timestamp": "1:05-1:20",
        "visualDirection": "Doctor adjusting settings with a tablet",
        "audioVoiceover": "Doctors adjust the settings over several visits to get the best result. Stimulation can be changed or switched off.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      },
      {
        "time": "1:20-1:30",
        "visual": "Patient walking and gardening",
        "narration": "DBS does not cure the condition, but it can greatly improve daily life for carefully selected patients.",
        "timestamp": "1:20-1:30",
        "visualDirection": "Patient walking and gardening",
        "audioVoiceover": "DBS does not cure the condition, but it can greatly improve daily life for carefully selected patients.",
        "onScreenGraphics": "Nuhavi Health · How Deep Brain Stimulation Works"
      }
    ]
  },
  {
    "id": "script-06",
    "title": "How Knee and Hip Replacement Surgeries Are Performed",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "duration": "110 seconds",
    "targetDurationSeconds": 110,
    "wordCount": "138 narration words",
    "style": "2D anatomical animation; no surgical footage; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Knee and Hip Replacement Surgeries Are Performed.",
    "targetAudience": "Patients and families exploring Orthopedics treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Healthy knee with smooth cartilage vs worn knee with bone rubbing",
        "narration": "Healthy joints are covered with smooth cartilage. In arthritis, this cartilage wears away and bone rubs on bone, causing pain and stiffness.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Healthy knee with smooth cartilage vs worn knee with bone rubbing",
        "audioVoiceover": "Healthy joints are covered with smooth cartilage. In arthritis, this cartilage wears away and bone rubs on bone, causing pain and stiffness.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      },
      {
        "time": "0:15-0:35",
        "visual": "Knee: damaged surfaces trimmed; metal and plastic parts fitted",
        "narration": "In a knee replacement, the surgeon removes the damaged surfaces of the thigh and shin bones and fits smooth metal parts with a plastic spacer in between.",
        "timestamp": "0:15-0:35",
        "visualDirection": "Knee: damaged surfaces trimmed; metal and plastic parts fitted",
        "audioVoiceover": "In a knee replacement, the surgeon removes the damaged surfaces of the thigh and shin bones and fits smooth metal parts with a plastic spacer in between.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      },
      {
        "time": "0:35-0:55",
        "visual": "Hip: worn ball and socket replaced with cup, liner, ball and stem",
        "narration": "In a hip replacement, the worn ball and socket are replaced with a new socket in the pelvis and a ball on a stem fitted into the thigh bone.",
        "timestamp": "0:35-0:55",
        "visualDirection": "Hip: worn ball and socket replaced with cup, liner, ball and stem",
        "audioVoiceover": "In a hip replacement, the worn ball and socket are replaced with a new socket in the pelvis and a ball on a stem fitted into the thigh bone.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      },
      {
        "time": "0:55-1:10",
        "visual": "Robotic arm assisting surgeon (optional segment)",
        "narration": "Some centres use robotic assistance to help plan and position the implants precisely.",
        "timestamp": "0:55-1:10",
        "visualDirection": "Robotic arm assisting surgeon (optional segment)",
        "audioVoiceover": "Some centres use robotic assistance to help plan and position the implants precisely.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      },
      {
        "time": "1:10-1:30",
        "visual": "Patient walking with a walker on day one; physiotherapy",
        "narration": "Most patients stand and walk with support within a day of surgery. Physiotherapy is essential to regain strength and movement.",
        "timestamp": "1:10-1:30",
        "visualDirection": "Patient walking with a walker on day one; physiotherapy",
        "audioVoiceover": "Most patients stand and walk with support within a day of surgery. Physiotherapy is essential to regain strength and movement.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      },
      {
        "time": "1:30-1:50",
        "visual": "Patient walking comfortably months later",
        "narration": "Most people return to daily activities within a few months, with far less pain. Talk to an orthopaedic surgeon about whether joint replacement is right for you.",
        "timestamp": "1:30-1:50",
        "visualDirection": "Patient walking comfortably months later",
        "audioVoiceover": "Most people return to daily activities within a few months, with far less pain. Talk to an orthopaedic surgeon about whether joint replacement is right for you.",
        "onScreenGraphics": "Nuhavi Health · How Knee and Hip Replacement Surgeries Are Performed"
      }
    ]
  },
  {
    "id": "script-07",
    "title": "How Minimally Invasive Spine Surgery Works",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "duration": "90 seconds",
    "targetDurationSeconds": 90,
    "wordCount": "113 narration words",
    "style": "2D cutaway animation of the spine; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Minimally Invasive Spine Surgery Works.",
    "targetAudience": "Patients and families exploring Spine Surgery treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Spine segment; disc bulge pressing on a nerve; pain path down the leg",
        "narration": "When a slipped disc or narrowing of the spine presses on a nerve, it can cause pain, numbness or weakness in the arm or leg.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Spine segment; disc bulge pressing on a nerve; pain path down the leg",
        "audioVoiceover": "When a slipped disc or narrowing of the spine presses on a nerve, it can cause pain, numbness or weakness in the arm or leg.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      },
      {
        "time": "0:15-0:30",
        "visual": "Most patients improving with physiotherapy",
        "narration": "Most people improve without surgery. When symptoms persist or weakness develops, surgery may be recommended.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Most patients improving with physiotherapy",
        "audioVoiceover": "Most people improve without surgery. When symptoms persist or weakness develops, surgery may be recommended.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      },
      {
        "time": "0:30-0:50",
        "visual": "Small incision; tube gently parting muscles instead of cutting",
        "narration": "Minimally invasive spine surgery uses a small incision and a narrow tube that gently separates the muscles instead of cutting them.",
        "timestamp": "0:30-0:50",
        "visualDirection": "Small incision; tube gently parting muscles instead of cutting",
        "audioVoiceover": "Minimally invasive spine surgery uses a small incision and a narrow tube that gently separates the muscles instead of cutting them.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      },
      {
        "time": "0:50-1:05",
        "visual": "Magnified camera view; disc fragment removed; nerve freed",
        "narration": "Using a microscope or a tiny camera, the surgeon removes the disc fragment or bone pressing on the nerve.",
        "timestamp": "0:50-1:05",
        "visualDirection": "Magnified camera view; disc fragment removed; nerve freed",
        "audioVoiceover": "Using a microscope or a tiny camera, the surgeon removes the disc fragment or bone pressing on the nerve.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      },
      {
        "time": "1:05-1:20",
        "visual": "Patient walking the same day",
        "narration": "Because there is less muscle damage, many patients walk the same day and go home sooner.",
        "timestamp": "1:05-1:20",
        "visualDirection": "Patient walking the same day",
        "audioVoiceover": "Because there is less muscle damage, many patients walk the same day and go home sooner.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      },
      {
        "time": "1:20-1:30",
        "visual": "Spine specialist consultation",
        "narration": "It is not suitable for every condition. A spine specialist will advise the best approach for you.",
        "timestamp": "1:20-1:30",
        "visualDirection": "Spine specialist consultation",
        "audioVoiceover": "It is not suitable for every condition. A spine specialist will advise the best approach for you.",
        "onScreenGraphics": "Nuhavi Health · How Minimally Invasive Spine Surgery Works"
      }
    ]
  },
  {
    "id": "script-08",
    "title": "How IVF and Embryo Transfer Work",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF & Reproductive Medicine",
    "duration": "120 seconds",
    "targetDurationSeconds": 120,
    "wordCount": "145 narration words",
    "style": "Soft 2D animation; gentle palette; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How IVF and Embryo Transfer Work.",
    "targetAudience": "Patients and families exploring IVF & Reproductive Medicine treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Natural conception: egg meets sperm in the fallopian tube",
        "narration": "In natural conception, an egg released from the ovary meets sperm in the fallopian tube. IVF carries out this step in a laboratory.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Natural conception: egg meets sperm in the fallopian tube",
        "audioVoiceover": "In natural conception, an egg released from the ovary meets sperm in the fallopian tube. IVF carries out this step in a laboratory.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "0:15-0:30",
        "visual": "Daily injections; ovaries with several follicles growing",
        "narration": "First, hormone injections help the ovaries develop several eggs. Regular scans track their growth.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Daily injections; ovaries with several follicles growing",
        "audioVoiceover": "First, hormone injections help the ovaries develop several eggs. Regular scans track their growth.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "0:30-0:45",
        "visual": "Ultrasound-guided needle collecting eggs under sedation",
        "narration": "When the eggs are ready, they are collected in a short procedure under sedation, using a thin needle guided by ultrasound.",
        "timestamp": "0:30-0:45",
        "visualDirection": "Ultrasound-guided needle collecting eggs under sedation",
        "audioVoiceover": "When the eggs are ready, they are collected in a short procedure under sedation, using a thin needle guided by ultrasound.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "0:45-1:05",
        "visual": "Lab dish; sperm meets egg, or single sperm injected (ICSI)",
        "narration": "In the laboratory, the eggs are combined with sperm. Sometimes a single sperm is injected into each egg, a technique called ICSI.",
        "timestamp": "0:45-1:05",
        "visualDirection": "Lab dish; sperm meets egg, or single sperm injected (ICSI)",
        "audioVoiceover": "In the laboratory, the eggs are combined with sperm. Sometimes a single sperm is injected into each egg, a technique called ICSI.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "1:05-1:20",
        "visual": "Embryo dividing from day 1 to day 5 blastocyst",
        "narration": "The fertilised eggs grow into embryos over three to five days.",
        "timestamp": "1:05-1:20",
        "visualDirection": "Embryo dividing from day 1 to day 5 blastocyst",
        "audioVoiceover": "The fertilised eggs grow into embryos over three to five days.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "1:20-1:40",
        "visual": "Thin catheter placing an embryo into the uterus under ultrasound",
        "narration": "A selected embryo is gently placed in the uterus through a thin, soft tube. It is usually quick and painless. Extra good-quality embryos can be frozen.",
        "timestamp": "1:20-1:40",
        "visualDirection": "Thin catheter placing an embryo into the uterus under ultrasound",
        "audioVoiceover": "A selected embryo is gently placed in the uterus through a thin, soft tube. It is usually quick and painless. Extra good-quality embryos can be frozen.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      },
      {
        "time": "1:40-2:00",
        "visual": "Calendar showing two-week wait; blood test",
        "narration": "About two weeks later, a blood test shows whether pregnancy has begun. Success depends on many factors, especially age, so talk to a fertility specialist about your situation.",
        "timestamp": "1:40-2:00",
        "visualDirection": "Calendar showing two-week wait; blood test",
        "audioVoiceover": "About two weeks later, a blood test shows whether pregnancy has begun. Success depends on many factors, especially age, so talk to a fertility specialist about your situation.",
        "onScreenGraphics": "Nuhavi Health · How IVF and Embryo Transfer Work"
      }
    ]
  },
  {
    "id": "script-09",
    "title": "How Bone Marrow Transplantation Works",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "duration": "110 seconds",
    "targetDurationSeconds": 110,
    "wordCount": "132 narration words",
    "style": "2D animation; bone cutaway showing marrow; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Bone Marrow Transplantation Works.",
    "targetAudience": "Patients and families exploring Bone Marrow Transplant treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Bone marrow inside bone producing red cells, white cells and platelets",
        "narration": "Inside your bones is bone marrow, a soft tissue that makes all your blood cells.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Bone marrow inside bone producing red cells, white cells and platelets",
        "audioVoiceover": "Inside your bones is bone marrow, a soft tissue that makes all your blood cells.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "0:15-0:30",
        "visual": "Marrow filled with abnormal cells crowding out healthy ones",
        "narration": "In some blood cancers and blood disorders, the bone marrow becomes diseased or stops working properly.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Marrow filled with abnormal cells crowding out healthy ones",
        "audioVoiceover": "In some blood cancers and blood disorders, the bone marrow becomes diseased or stops working properly.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "0:30-0:45",
        "visual": "Two sources: patient's own cells, or a donor's cells",
        "narration": "A bone marrow transplant replaces it with healthy stem cells, either the patient's own, collected earlier, or cells from a matched donor.",
        "timestamp": "0:30-0:45",
        "visualDirection": "Two sources: patient's own cells, or a donor's cells",
        "audioVoiceover": "A bone marrow transplant replaces it with healthy stem cells, either the patient's own, collected earlier, or cells from a matched donor.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "0:45-1:00",
        "visual": "Conditioning chemotherapy clearing the marrow",
        "narration": "First, high-dose chemotherapy clears the diseased marrow and makes space for the new cells.",
        "timestamp": "0:45-1:00",
        "visualDirection": "Conditioning chemotherapy clearing the marrow",
        "audioVoiceover": "First, high-dose chemotherapy clears the diseased marrow and makes space for the new cells.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "1:00-1:15",
        "visual": "Stem cells given through a drip, travelling to the bones",
        "narration": "The healthy stem cells are then given through a drip, like a blood transfusion. They travel to the bones on their own.",
        "timestamp": "1:00-1:15",
        "visualDirection": "Stem cells given through a drip, travelling to the bones",
        "audioVoiceover": "The healthy stem cells are then given through a drip, like a blood transfusion. They travel to the bones on their own.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "1:15-1:35",
        "visual": "Protective room; counts slowly rising on a chart",
        "narration": "Over two to four weeks, the new cells settle in and start making blood again. During this time, patients stay in a protective room to avoid infection.",
        "timestamp": "1:15-1:35",
        "visualDirection": "Protective room; counts slowly rising on a chart",
        "audioVoiceover": "Over two to four weeks, the new cells settle in and start making blood again. During this time, patients stay in a protective room to avoid infection.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      },
      {
        "time": "1:35-1:50",
        "visual": "Patient going home; follow-up visits",
        "narration": "Recovery continues for months, with close follow-up. Your transplant team will guide you at every step.",
        "timestamp": "1:35-1:50",
        "visualDirection": "Patient going home; follow-up visits",
        "audioVoiceover": "Recovery continues for months, with close follow-up. Your transplant team will guide you at every step.",
        "onScreenGraphics": "Nuhavi Health · How Bone Marrow Transplantation Works"
      }
    ]
  },
  {
    "id": "script-10",
    "title": "How Kidney Transplantation Is Performed",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "duration": "100 seconds",
    "targetDurationSeconds": 100,
    "wordCount": "120 narration words",
    "style": "2D anatomical animation; captions",
    "coreMessage": "Plain-language 60-120s animated clinical explainer: How Kidney Transplantation Is Performed.",
    "targetAudience": "Patients and families exploring Kidney Transplant treatment options in India.",
    "scenes": [
      {
        "time": "0:00-0:15",
        "visual": "Kidneys filtering blood; then failing kidneys",
        "narration": "Your kidneys filter waste and extra water from your blood. When they fail, dialysis or a kidney transplant is needed.",
        "timestamp": "0:00-0:15",
        "visualDirection": "Kidneys filtering blood; then failing kidneys",
        "audioVoiceover": "Your kidneys filter waste and extra water from your blood. When they fail, dialysis or a kidney transplant is needed.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      },
      {
        "time": "0:15-0:30",
        "visual": "Living donor and recipient in adjoining rooms",
        "narration": "A new kidney can come from a living donor, usually a close family member, or from a deceased donor.",
        "timestamp": "0:15-0:30",
        "visualDirection": "Living donor and recipient in adjoining rooms",
        "audioVoiceover": "A new kidney can come from a living donor, usually a close family member, or from a deceased donor.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      },
      {
        "time": "0:30-0:45",
        "visual": "Keyhole removal of donor kidney through small incisions",
        "narration": "For a living donation, the donor's kidney is usually removed by keyhole surgery. The donor lives normally with one kidney.",
        "timestamp": "0:30-0:45",
        "visualDirection": "Keyhole removal of donor kidney through small incisions",
        "audioVoiceover": "For a living donation, the donor's kidney is usually removed by keyhole surgery. The donor lives normally with one kidney.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      },
      {
        "time": "0:45-1:05",
        "visual": "New kidney placed in lower abdomen; artery, vein and ureter connected",
        "narration": "The new kidney is placed in the lower abdomen, not where the old kidneys are. It is connected to an artery, a vein and the bladder. The old kidneys usually stay in place.",
        "timestamp": "0:45-1:05",
        "visualDirection": "New kidney placed in lower abdomen; artery, vein and ureter connected",
        "audioVoiceover": "The new kidney is placed in the lower abdomen, not where the old kidneys are. It is connected to an artery, a vein and the bladder. The old kidneys usually stay in place.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      },
      {
        "time": "1:05-1:20",
        "visual": "Urine flowing; patient waking up",
        "narration": "A kidney from a living donor often starts making urine almost immediately.",
        "timestamp": "1:05-1:20",
        "visualDirection": "Urine flowing; patient waking up",
        "audioVoiceover": "A kidney from a living donor often starts making urine almost immediately.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      },
      {
        "time": "1:20-1:40",
        "visual": "Daily medicines; follow-up blood tests",
        "narration": "Lifelong anti-rejection medicines protect the new kidney, and regular check-ups help it last for many years.",
        "timestamp": "1:20-1:40",
        "visualDirection": "Daily medicines; follow-up blood tests",
        "audioVoiceover": "Lifelong anti-rejection medicines protect the new kidney, and regular check-ups help it last for many years.",
        "onScreenGraphics": "Nuhavi Health · How Kidney Transplantation Is Performed"
      }
    ]
  }
];
