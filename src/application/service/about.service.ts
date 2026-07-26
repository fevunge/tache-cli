import { AboutQueries } from "../port/in/queries/about.queries";


export class AboutService implements AboutQueries {
	private version:string = "1.0.0";
	private last_commit:string = "#c2df6";
	private author = "@fevunge";
	private build_date = "2024-06-01T12:00:00Z";
	private node_version = "node v24.13.1";

	private ascii_icon = `                                           
       +++++++****#%%%%%#**+++                       
    +++++++++****#%%%*=----------                    
   ++++++++*****#%%%%*=-==+=-==---+                  
  +++++++++****#%%%%%*==#@@=-=+=---%                 
  ++++++++*****#%%%%%*=-#@@@%+==---+@@               
  ++++++++*****#%%%%%*=--=*++*%#+--=@@@              
      +++++*****#%%%%*-------------+@@@              
       +++++*****#%%%*------------+@@@@              
         ++++**#**###+--*%%%%%%%%@@@@@@              
               @+------+%@@@@@@@@@@@@@@              
               @*------*%@@@@@@@@@@@@@@@@@@@@@@@@@   
                %=-----+%@@@@@@@@@@@@@@@@@@@@@@@@@@  
                 #=----+**++++++++++*#@@@@@@@@@@@@@@ 
                 ##+==-+++++++++++++*#@%%%%%%%%      
                 #####**++++++++++++++               								
`;
	get(): void {
		console.log(this.ascii_icon);
		console.log(`tache-cli [${this.version}] [${this.last_commit}] - via ${this.node_version} by ${this.author} (built on ${this.build_date})`);
	}
}