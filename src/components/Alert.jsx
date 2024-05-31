if(error){
    return(
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <div class="flex items-center">
                <div class="mr-2">
                <i class="fas fa-times-circle"></i> <!-- Font Awesome error icon -->
                </div>
                <div>
                <p class="font-bold">Error!</p>
                <p class="text-sm">An error occurred while processing your request.</p>
                </div>
            </div>
        </div>
    );

}else{
    return(
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <div class="flex items-center">
                <div class="mr-2">
                <i class="fas fa-check-circle"></i> <!-- Font Awesome success icon -->
                </div>
                <div>
                <p class="font-bold">Success!</p>
                <p class="text-sm">Your action was successful.</p>
                </div>
            </div>
        </div>

    );
}

