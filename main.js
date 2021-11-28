copyrite = 
 blockY=1;
 blockX=1;

blockImgW = 350;
blockImgH = 430;

var BlockImgObj= "";

function new_image(get_image)
{
	fabric.Image.fromUrl(get_image, function(Img) {
        BlockImgObj=Img
        BlockImgObj.scaleToWidth(blockImgW)
        BlockImgObj.scaleToHeight(blockImgH)
        BlockImgObj.set({
            top: blockY,
            left: blockX
        })
        canvas.add(BlockImgObj)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(keyPressed == '82')
	{
		blockX = 50
		new_image(rr1.png)
	}
	if(keyPressed == '71')
	{
		blockX = 200;
		new_image(gr.png)
	}
	
	if(keyPressed == '89')
	{
		blockX =350;
		new_image(yr.png)
	}
	if(keyPressed == '80')
	{
		blockX = 600;
		new_image(pr.png)
	}
	if(keyPressed == '66')
	{
		blockX = 700;
		new_image(br.png)
	}
	
}

