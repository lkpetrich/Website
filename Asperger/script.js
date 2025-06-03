// Calculate the scores for the quiz
function calculate()
{
	// Get the scoring
	var scoremenu = document.getElementById("Scoring")
	var scoring = scoremenu.value
	var maxindscore = parseInt(scoring)
	
	// Go through the questions
	var questable = document.getElementById("Questions")
	var ques = questable.rows
	var numques = ques.length
	var i
	// Set up a scoring mask, to indicate whether it's agreement or disagreement that counts:
	// Agreement = +1, disagreement = -1, neutral = 0
	// Note: the indexing is converted from 1-based to 0-based
	var scoremask = new Array(numques)
	for (i=0; i<numques; i++)
		scoremask[i] = 0
	for (i=0; i<agree.length; i++)
		scoremask[agree[i]-1] = 1
	for (i=0; i<disagree.length; i++)
		scoremask[disagree[i]-1] = -1
	var ansques = 0
	var score = 0
	var maxscore = 0
	for (i=0; i<numques; i++)
	{
		var ione = i + 1
		var btnlst = document.getElementsByName("btn " + ione)
		var checked = false
		var j
		for (j=0; j<btnlst.length; j++)
		{
			var btn = btnlst[j]
			var btnval = parseInt(btn.value)
			if (btn.checked)
			{
				checked = true
				quesscore = btnval
			}
		}
		if (checked)
		{
			ansques += 1
			mask = scoremask[i]
			if (mask != 0)
				maxscore += maxindscore
			quesscore *= mask
			if (quesscore < 0) quesscore = 0
			if (quesscore > maxindscore) quesscore = maxindscore
			score += quesscore
		}
	}
	if (ansques < numques)
		alert("You answered only " + ansques + " out of the " + numques + " questions")
	scoreplace = document.getElementById("Score")
	scoreplace.innerHTML = scorelabel + " " + score + " out of " + maxscore
}
