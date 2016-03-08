var flag
var flagId
var flagName
var flagVal
var flags

Flag	Name	Type	Comments
1..3	unused		
4	undyne_trigger_override	debug bool	When 1, upon encountering Undyne, she will treat you as if you killed no monsters, even if you killed one.
5	fun	range	Chosen randomly when you start a new run, set to 0 after specific events.
6	hardmode	bool	
7	true_pacifist	bool	Post-Asriel fight status.
8	disable_random_encounters	bool	Receive Undyne's letter or kill Mettaton Neo. Needs confirmation if it works when set manually.
9	unaccessed		
10	spared_last	volatile bool	
11	escaped_last	volatile bool	
12	killed_last	volatile bool	
13	bored_last	volatile bool	Let the battle take too long. Occurs only in the ruins.
14	status_dummy	range	0 if you run away from the Dummy; 1 if you kill it; 2 if you talk to it, 3 if you bore it. The Mad Dummy's dialogue will be affected.
15	in_battle	volatile bool	
16	type_heart_transition	volatile bool	Occurs when triggering "quick" battles (i.e. Undyne's spears, lasers).
17..18	unaccessed		
19	unused		
20	animation_index	volatile range	
21	cooked_noodles	bool	
22	name_color	range	Set when you talk to the frog in the ruins. When sparing monsters: 0 for yellow names, 1 for white, 2 for pink. Also a small easter egg in the trash area if not equal to 0.
23	spared	counter	
24	escaped	counter	
25	dialogues_skipped	counter	
26	murderlevel_override	debug range	If set to anything other than 0, overrides the calculated murder level.
27	spared_specific	bool	If you spare specific opponents, certain events that occur with a high murder level won't happen. Similar to a "redemption" flag. If you spare any of those monsters, the game is less desolated.
28	fast_text_skip	debug bool	Keeping C pressed during dialogue will quickly skip sentences.
29	tutorial_froggit_encountered	bool	
30	pushed_rock_1	bool	
31	pushed_rock_2	bool	
32	pushed_rock_3	bool	
33	candy_taken	range	
34	pushed_rock_4	bool	
35	spared_napstablook	bool	
36	waited_toriel	bool	Wait for Toriel to call you when she asks to stay in a room.
37..39	unused		
40	greeted_toriel	counter	
41	flirted_toriel	counter	
42	call_mom_toriel	bool	In combination with flirted_toriel above, affects a few dialogues.
43	ruins_switches_pressed	counter	When greater than 25, changes the displayed text upon pressing a switch.
44	disobeyed_toriel	counter	Try to exit the ruins without asking Toriel about it first.
45	status_toriel	range	0 when you enter Toriel's house for the first time, 1 when you try to leave the ruins, 3 when you fight Toriel, 4 if you kill her, 5 if you spare her.
46	choice_flavor	range	
47	status_creepy_tundra	range	Plays the creepy soundscape and shows Sans' shadow in the foreground.
48..49	unused		
50	know_water_sausage	bool	Read about water sausages in Toriel's room. Makes you recognize the plant in Toriel's living room.
51	wrong_switches_pressed	counter	After a while, gives you a hint about which switch to press.
52	status_doggo	range	1 if you kill Doggo, 2 if you throw him a stick and spare him.
53	status_dogcouple	range	1 if you kill Dogamy and/or Dogaressa, 2 if you damage them first and then throw a stick.
54	status_greaterdog	range	1 if you kill Greater Dog, 2 if you throw him a stick and spare him, 3 if you ignore him repeatedly.
55	status_lesserdog	range	1 if you kill Lesser Dog, 2 if you pet him until his neck extends at max. If 2, room_ruins6 will be filled with broken dog structures.
56	status_snowman	range	1 if you get a Snowman Piece from the snowman in room_tundra6A, 2 if you get another piece after disposing of the first one, 4 if you use the Snowman Piece in front of the him, 5 if you talk to the him when the flag is 4.
57	status_snowdrake	range	1 if you laugh at Snowdrake's joke; 2 if you kill him, all future instances of Snowdrake with Chilldrakes.
58	choice_harder_puzzle	range	
59	spider_donations_total	range	
60	nicecream_donations_total	range	
61	unused		
62	choice_ate_left_spaghetti	range	
63	xoxo_resets	counter	Affects the dialogue with Sans after the puzzle. Slightly different result if equals to 0 and M1 under the Sans category in undertale.ini is greater than 1.
64	toggled_snow_switch	bool	
65	got_snowpoff_gold	bool	
66	flirted_papyrus_fight	bool	
67	status_papyrus	range	-1..-3: be defeated by Papyrus, affects the notes he leaves you in the garage. 0 if you spare Papyrus, 1 if you kill him.
68	fought_papyrus	bool	
69	bpants_alt_dialogue	debug bool	Very slightly changes the dialogue with Burgerpants.
70	progress_tundra_battles	counter	
71	unused		
72	status_inn	range	1 if you stay a night, 2 if you stay a night with less than 80 gold and the flag set to 0.
73	stayed_inn	bool	
74	betrayed_gyftrot		Set if you "betray" Gyftrot by putting a present after removing some gifts off him. Unaccessed
75	armor_papyrus_inquiry	range	Equals to the id of the armor you're wearing upon the first call. The combination of these affects the dialogue you get in Papyrus' second phone call.
76	choice_papyrus_inquiry	range	0 if you tell Papyrus you are wearing the armor he specified, 1 otherwise.
77	armor_undyne_saw	range	Equals to the id of the armor Undyne saw you wear.
78	strong_tough_glove	volatile bool	Use a punchcard in battle while wearing the Tough Glove, increases attack.
79	nicecream_business	bool	8 if you buy a nicecream in room_tundra8. Upon the second encounter, will affect Nicecream Guy's mood and determine whether he'll start dispensing punchcards.
80	punchcards_bought	counter	
81	status_shyren	range	1 if you kill Shyren; 2 if you encourage Shyren to the max, affects the Amalgamate's dialogue in the room after the True Pacifist ending.
82	papyrus_sink_event_occurred	bool	
83	got_couch_gold	bool	
84	unaccessed		Would affect the dialogue in room_water_mushroom, but it can't be accessed normally.
85	have_umbrella	volatile bool	
86	music_statue_on	bool	
87	unused		
88	dated_papyrus	counter	4 is the max, set when you complete the date.
89	dated_sans1	counter	2 is the max, set when you complete the first date with Sans at Grillbys.
90	choice_mkid_umbrella	range	1 if you meet Monster Kid without an umbrella; 2 if, with flag set to 1, you get an umbrella and talk to him; 3 if, with flag set to 2, you dispose of the umbrella and talk to him again.
91	interacted_garbage_savepoint	bool	
92	status_stable	range	Would affect the status of the stable. It's cut-out content.
93	dated_napstablook	range	1 if you talk to Napstablook in their house, 3 if you feel like garbage with them, 9 if you refuse to feel like garbage.
94	current_napstablook_song	volatile range	
95	aaron_woshua_event	bool	
96	conversation_emblem	counter	Gerson's conversation.
97	creepy_friend_seen	bool	Would prevent the NPC in room_water_prebird from repeating himself. Cut-out content.
98	saved_mkid	range	0 if, when Monster Kid slips and is about fall, you exit the room; 1 if you let Undyne save him; 2 if you save him.
99	undyne_difficulty	volatile counter	Makes the fight more or less difficult, depending on a few factors (saved Monster Kid, how many times you died, etc.).
100	got_ribbon	bool	
101	unused		
102	got_toyknife	bool	
103	got_bscotch_pie	bool	
104	got_quiche	bool	
105	got_tutu	bool	
106	got_ballet_shoes	bool	
107	got_artifact	bool	
108	got_spacefood	bool	
109	got_instant_noodles	bool	
110	got_frying_pan	bool	
111	got_apron	bool	
112	got_glamburger_trashcan	bool	
113	got_gold_trashcan	bool	
114	got_dagger	bool	
115	got_locket	bool	
116..129	unused		
130	spared_froggit	bool	
131	spared_whimsun	bool	
132	spared_moldsmal	bool	
133	spared_loox	bool	
134	spared_vegetoid	bool	
135	spared_migosp	bool	
136	spared_snowdrake	bool	
137	spared_icecap	bool	
138	spared_gyftrot	bool	
139	spared_doggo	bool	
140	unused		
141	spared_lesserdog	bool	
142	spared_greatdog	bool	
143	spared_aaron	bool	
144	spared_moldsmalx	bool	
145	spared_woshua	bool	
146	spared_temmie	bool	
147	spared_maddummy	bool	
148	spared_vulkin	bool	
149	spared_tsunderplane	bool	
150	spared_pyrope	bool	
151	spared_finalfroggit	bool	
152	spared_whimsalot	bool	
153	spared_astigmatism	bool	
154	spared_madjick	bool	
155	spared_finalknight	bool	
156	spared_endogeny	bool	
157..190	unused		
191	conversation_toriel_pacifist	counter	
192	conversation_sans_pacifist	counter	
193	conversation_undyne_pacifist	counter	
194	unlock_napsta_pacifist	bool	Talk to Undyne until it invites you to go talk to Napstablook. They will be in their courtyard.
195	conversation_papyrus_pacifist	counter	
196	conversation_alphys_pacifist	counter	
197	conversation_asgore_pacifist	counter	
198	conversation_mettaton_pacifist	counter	
199	conversation_napstablook_pacifist	counter	
200	kills_area_pointer	range	Assigned when moving between areas. Points at the area-specific kill counter.
201	kills	counter	
202	kills_ruins	counter	
203	kills_tundra	counter	
204	kills_water	counter	
205	kills_hotland	counter	
206..220	unused		
221	genocide_ruins	bool	
222	genocide_tundra	bool	
223	genocide_water	bool	
224	genocide_hotland	bool	
225	genocide_core	bool	
226..249	unused		
250	nicecream_business2	volatile range	Nicecream Guy's outlook of his business will depend on your interactions with him.
251	killed_undyne_ex	bool	
252	killed_glad_dummy	bool	
253	killed_snowman	counter	Take pieces of the snowman to kill him.
254	interacted_crosswords	bool	
255	robbed_snowdin	bool	
256	robbed_core	bool	
257..259	unused		
260	used_recovery_item	bool	Affects the neutral ending.
261	interacted_fakedog	bool	Interact with the fake dog in the dev room.
262	delivered_seatea	bool	
263	delivered_cinnabun	bool	
264	delivered_hotdog	bool	
265	tem_sell_parameter1	range	
266	tem_sell_parameter2	range	
267	status_hotel	range	1 the first time you stay at the hotel, 2 if you stay at the hotel again.
268	unused		
269	allergy_tem_talked	bool	
270	glowshrooms_on	bool	Doesn't seem to have any effect, set when you turn 4 glowshrooms on in the mushrooms path puzzle.
271	fighting_sans	volatile bool	
272	geeettttttt_dunked_on	volatile bool	
273..274	unused		
275	tundra_stick_broken	range	1 when you walk past the stick, 2 when you walk further ahead.
276	temmie_college_paid	bool	
277	fun_call_occurred	bool	
278	completed_tile_puzzle	bool	Affects a dialogue with Papyrus on the phone.
279	interacted_clamgirl	bool	
280	conversation_elderpuzzles	counter	
281	status_sosorry	range	1 if you kill So Sorry, 2 if you spare him.
282	encountered_glyde	bool	Encounter Glyde.
283	check_papyrus_kitchen_again	bool	After the date, go in Papyrus' kitchen. Prevents Glyde from appearing and affects the dialogue with Papyrus on the phone.
284	undyne_spears_anger	bool	When Undyne throws her 100th spear, be in room_water8.
285	unaccessed	volatile range	Something to do with the spear tile generation, but is unaccessed.
286	conversation_toriel_sms	counter	
287	conversation_sms_parameters	volatile range	Unclear specifics, but has to do with the amount of SMS you'll receive.
288	failed_defusing	bool	
289	stepped_green_tile	bool	
290..299	unused		
300..311	dimensional_box_A	range	Equals to the id of the stored item. Used in storage scripts.
312..323	dimensional_box_B	range	
324..349	unused		
350	status_undyne	range	1 if you kill Undyne, 2 if you spare her, but don't give water to Undyne in Hotland.
351	undyne_hp_left	range	Equals to the HP Undyne died with. Unaccessed.
352	fought_undyne	bool	
353	poured_water_ground	counter	Affects the dialogue with Clamguy, creates a puddle after a while.
354	conversation_papyrus_calls	counter	
355	choice_maddummy	range	0 if you don't interact with the Mad Dummy; 1 if you punch it; 2 if you don't.
356	completed_piano_puzzle	bool	
357	progress_water_battles	counter	
358	progress_water2_battles	counter	
359	unused		
360..364	rain_parameters	volatile range	Seems to affect the rain's rendering.
365	unused		
366	have_water	volatile bool	
367	disable_alphys_calls	bool	Reach the lab in a genocide run.
368	disable_alphys_statuses	bool	
369	conversation_alphys_statuses	counter	
370	quick_battle	bool	Enter a quick battle (i.e. lasers, spears).
371	laser1_off	bool	
372	laser2_on	bool	
373	laser2_off	bool	
374	completed_shoot_puzzle1	bool	
375	completed_shoot_puzzle2	bool	
376	conveyor_puzzle_variable	volatile range	Unclear, seems to be used as a position variable. Doesn't seem important.
377	failed_jetpack_segment	bool	
378	hot_dogs_money_spent	range	
379	conversation_hotdogs	counter	
380	headdogs	counter	Buy a hot dog with no space in your inventory.
381	reached_headdogs_limit	bool	Buy a hot dog with 30 hot dogs on your head.
382	muffet_bribe_price	range	Various values, depending on your performance, gold, etc.
383	muffet_bribe_money_spent	range	Total bribes.
384	unused		
385	status_yellow_button	range	1 if yellow button available, 2 if yellow button pressed.
386	reset_bridgeseed_puzzle	range	Unclear specifics, but seems unimportant.
387	won_ball_game	bool	Win the ball game in an extremely short time.
388	fall_animation_parameters	range	Something to do with the fall animation. Not worth looking into.
389	dated_undyne	range	4 after you head outside of the flaming house.
390	undyne_expression	volatile range	Unclear, but it seems to determine the sprite for Undyne's expression.
391	choice_meal_grillby	range	
392	unused		
393	unclear	volatile range	Internal to Madjick's battle.
394	unused		
395	bombs_defused	counter	
396	fought_muffet	bool	
397	killed_muffet	bool	
398	current_elevator_floor	range	
399	completed_shoot_puzzle3	bool	
400	completed_shoot_puzzle4	bool	
401	asked_papyrus_rg	bool	Call Papyrus when the Royal Guards are in the room. Slightly affects the dialogue with the guards when you spare them.
402	killed_rg	bool	Affects the dialogue during Papyrus' and Undyne's phone call.
403	spider_sale_big_spendings	bool	Buy a 9999 gold spider bakery sale item. Unaccessed.
404	laser3_off	bool	Disable the third laser despite of Alphys' phone call.
405	conversation_wares	counter	Bratty and Catty's conversations.
406	conversation_mettaton	counter	
407	conversation_alphys	counter	
408	progress_hotland_battles	counter	
409	got_napstablook_friend_req	bool	
410..412	unused		
413	dated_sans2	range	2 after you eat at the restaurant with Sans.
414	got_alphys_advice1	bool	
415	got_alphys_advice2	bool	
416	got_alphys_advice3	bool	
417	got_alphys_advice4	bool	
418..421	unclear	volatile range	Pre-castle specific flags, seem to affect whether you can proceed or not and are naturally set as you progress.
422	unused		
423	progress_core_battles	counter	
424	turn_mettaton	range	1 if you can turn Mettaton, 2 when you turn Mettaton.
425	killed_mettaton	bool	1: kill Mettaton.
426	progress_core_battles2	counter	Incremental values: as you battle unique monsters in the core.
427..429	unused		
430	alphys_expression	volatile range	Unclear, but it seems to determine the sprite for Alphy's expression.
431	current_final_floor	bool	Determines which direction the elevator will go.
432	rode_long_elevator	bool	
433	unlocked_mettaton_house	bool	
434	choice_flamey_challenge	range	1 if you remember his name, else 2.
435	status_bpants	range	1 if you buy something from Burgerpants, 2 if you talk to him afterwards.
436	conversation_mtt	counter	Burgerpants' MTT conversation.
437	conversation_girls	counter	Burgerpants' conversation about Bratty and Catty.
438..439	unused		
440	water_taken_amount	counter	
441	water_wasted_amount	counter	
442	got_gun	bool	
443	got_cowboy_hat	bool	
444	got_mystery_key	bool	
445	got_face_steak	bool	
446..449	unused		
450	progress_early_story	counter	
451	unused		
452	have_castle_key1	bool	
453	have_castle_key2	bool	
454	unlocked_latchkey	bool	
455	early_story_parameter1	range	Seem to determine which step of the story to tell next.
456	early_story_parameter2	range	
457	told_asgore_ready	bool	
458	experience_cosmic_garbage	bool	
459	riverman_destination	volatile range	1..3 being the destination when talking to the riverman.
460	got_tem_village_hint	bool	
461	tem_boat_version	volatile bool	1: the riverman's boat will be cat-shaped.
462	called_already	range	Allows the second part of the call to occur when calling twice. Every room has two or more conversation parts.
463..464	unused		
465	papyrus_and_undyne	bool	After Undyne's date, calling Papyrus includes Undyne in the conversation.
466..469	unused		
470	conversation_undyne_mad	bool	Call Papyrus and Undyne in room_fire_lasers1. Just a counter used for this specific call, allowing the third part to occur.
471..474	unused		
475	killed_flowey	bool	Not sure about this one.
476	killed_asgore	bool	
477..479	unused		
480	completed_truelab	bool	
481..492	truelab_events	range	Various values. Only affects what happens in the lab, used to progress through.
493	dated_alphys	range	12 after you exit the true lab.
494	status_undyne_letter	range	3 if you receive Undyne's Letter EX.
495	popato_chisps_bought	counter	
496	conversation_onionsan	counter	
497	got_sans_room_key	bool	
498	unused		
499	seen_cast	bool	
500	fighting_asriel	volatile bool	
501	conversation_asriel_fight	counter	
502	but_it_refused	volatile bool	Flag 500 must be 1. Can't die.
503	dreamed_asriel_fight	volatile bool	
504	unused		
505..508	saved_lost_soul	bool	
509	toggle_final_beam	volatile bool	Sets the HP to decimal values.
510	plot_over	range	2 if you complete the True Pacifist boss fight, 1 if you talk to Asriel in the ruins after the True Pacifist boss fight.
511	conversation_asriel2	counter	Progress through the conversation with Asriel in the ruins.
512	choice_left_toriel	bool	Determines the type of the final scene in the bedroom.
