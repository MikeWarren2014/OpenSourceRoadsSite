while getopts ":dp" opt; do
  case ${opt} in
    d ) # process option d
	sh dev.sh
      ;;
    p ) # process option p
	sh prod.sh
      ;;
    \? ) 
	echo "Usage: cmd [-d] [-p]"
	echo "Builds and runs the code"
	echo "\n"
	echo "The -d flag runs it in development mode, by running the 'dev.sh' file located in this directory"
	echo "The -p flag runs it in production mode, by running the 'prod.sh' file located in this directory"
      ;;
  esac
done
