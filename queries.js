SELECT count(*) FROM coral__v2.event_egBetslipSummary
WHERE betslip_quantity = 1
AND meta_recordDate = "2019-06-19"
============================
Betslip single items: 274224

SELECT count(*) FROM coral__v2.event_egBetslipTransactionSummary
WHERE betslip_quantity = 1
AND meta_recordDate = "2019-06-19"
============================
Betslip single items transacted: 122921


SELECT count(*) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19")

===========================
10707

SELECT count(*) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and bet_sport = "Football" and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") 
============================
3642


SELECT bet_sport, count(betslip_id) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") group by bet_sport

====
good results grouped by sport type

// find the number of campaigns by selectionId

SELECT bet_selectionId, count(bet_selectionId) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and bet_sport = "Football" and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") group by bet_selectionId

~ 711 campaigns

FIND RESULTS FOR EVENTID

SELECT bet_eventId, count(bet_selectionId) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and bet_sport = "Football" and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") group by bet_eventId
========
result: 222 campaigns (football)

and the query for Horse racing:

SELECT bet_eventId, count(bet_selectionId) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and bet_sport = "Horse Racing" and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") group by bet_eventId

===
result: 205 campaigns

and now query for horse racing selectionId

SELECT bet_selectionId, count(bet_selectionId) FROM coral__v2.event_egBetslipItemAction as a
WHERE a.meta_recordDate = "2019-06-19" and a.betslip_quantity = 1 and bet_sport = "Horse Racing" and a.context_id not in (select b.context_id from coral__v2.event_egBetslipItemTransaction as b
WHERE b.meta_recordDate = "2019-06-19") group by bet_selectionId

======
result: 629








SELECT count(*) FROM coral__v2.event_egBetslipTransactionSummary as a 
WHERE a.context_id in (SELECT DISTINCT b.context_id from coral__v2.event_egBetslipSummary as b
WHERE b.betslip_quantity = 1
AND b.meta_recordDate = "2019-06-19")

 