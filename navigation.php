<!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="AdminDashboard.php">ADMIN PAGE</a>
				
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">       
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Welcome ADMIN <b class="caret"></b></a>
                    <ul class="dropdown-menu">  
                        <li class="divider"></li>
                        <li>
                            <a href="UserLogout.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
           <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li>
                        <a href="AdminDashboard.php"><i class="fa fa-fw fa-dashboard"></i> Home</a>
                    </li>
                    
                    <li class= "dropdown">
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Evaluation Result<i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="teacherevaluation.php">Teacher</a>
                            </li>
							<li>
                                <a href="#.php">Peer</a>
                            </li>
							<li>
                                <a href="#.php">Dean</a>
                            </li>
							<li>
                                <a href="#.php">Overall</a>
                            </li>
                        </ul>
                    </li>
					<li>
						<a href="questions.php"><i class="fa fa-fw fa-table"></i> Questions</a>
						<ul id="demo" class="collapse">
                            <li>
                                <a href="#">Category</a>
                            </li>
                        </ul>
					</li>
					<li>
						<a href="department.php"><i class="fa fa-fw fa-table"></i> Department</a>
					</li>
					<li>
						<a href="faculty.php"><i class="fa fa-fw fa-table"></i> Faculty</a>
					</li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>